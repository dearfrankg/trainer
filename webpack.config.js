const dotenv = require('dotenv')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const getConfig = require('hjs-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const join = path.join
const resolve = path.resolve

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'
const isTest = NODE_ENV === 'test'
const port = process.env.PORT || 8080

const root = resolve(__dirname)
const src = join(root, 'src')
const assets = join(src, 'assets')
const modules = join(root, 'node_modules')
const dest = join(root, 'dist')

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  port: port,
  html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        title: 'react starter seed',
        publicPath: isDev ? `http://localhost:${port}/` : '',
        meta: {
          'name': 'react starter seed',
          'description': 'webpack, react, babel, standard'
        },
        head: `
          <link rel="stylesheet" href="pure-min.css">
          <link rel="stylesheet" href="ionicons.min.css">
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css"/>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.js"></script>
          <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/mode/javascript/javascript.min.js"></script>
        `
      })
    }
  }
})

addDevServerCustomizations()
addBuildCustomizations()
addPcssLoaderSupport()
addPostCssSupport()
addFatEnvSupport()
addResolveSupport()
addTestSupport()
addBrowserTweaks()

// console.log(JSON.stringify(config, null, 2))
module.exports = config

function addDevServerCustomizations () {
  if (config.devServer) {
    config.devServer.contentBase = assets
    config.devServer.stats = 'errors-only'
  }
}

function addBuildCustomizations () {
  config.plugins = [
    new CopyWebpackPlugin([{ from: assets }])
  ].concat(config.plugins)
}

function addPcssLoaderSupport () {
  config.module.loaders.push({
    test: /\.pcss$/,
    include: [src],
    loader: 'style!css!postcss'
  })
}

function addPostCssSupport () {
  config.postcss = [].concat([
    require('precss')({}), // superset of Sass
    require('autoprefixer')({}),
    require('cssnano')({})
  ])
}

function addFatEnvSupport () {
  var dotEnvVars
  if (fileExists(join(root, '.env'))) {
    dotEnvVars = dotenv.config()
  }
  const environmentEnv = dotenv.config({
    path: join(root, 'config', `${NODE_ENV}.config.js`),
    silent: true
  })
  const envVariables =
      Object.assign({}, dotEnvVars, environmentEnv)

  const defines =
    Object.keys(envVariables)
    .reduce((memo, key) => {
      const val = JSON.stringify(envVariables[key])
      memo[`__${key.toUpperCase()}__`] = val
      return memo
    }, {
      __NODE_ENV__: JSON.stringify(NODE_ENV)
    })

  config.plugins = [
    new webpack.DefinePlugin(defines)
  ].concat(config.plugins)
}

function addResolveSupport () {
  config.resolve.root = [modules]
  config.resolve.alias = {
    'actions': join(src, 'actions'),
    'components': join(src, 'components'),
    'constants': join(src, 'constants'),
    'containers': join(src, 'containers'),
    'reducers': join(src, 'reducers'),
    'store': join(src, 'store'),
    'services': join(src, 'services'),
    'utils': join(src, 'utils'),
    'styles': join(src, 'styles')
  }
}

function addTestSupport () {
  if (isTest) {
    config.externals = {
      'react/lib/ReactContext': true,
      'react/lib/ExecutionEnvironment': true
    }
    config.module.noParse = /\/sinon\.js/
    config.resolve.alias['sinon'] = 'sinon/pkg/sinon'

    config.plugins = config.plugins.filter(p => {
      const name = p.constructor.toString()
      const fnName = name.match(/^function (.*)\((.*\))/)

      const idx = [
        'DedupePlugin',
        'UglifyJsPlugin'
      ].indexOf(fnName[1])
      return idx < 0
    })
  }
}

function addBrowserTweaks () {
  // prevents error: Cannot resolve module 'fs'
  // when using nodejs modules in the browser
  config.node = {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    'test/service-account-creds': false,
    'index.js': false
  }
}

function fileExists (path) {
  try {
    return fs.statSync(path).isFile()
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false
    } else {
      throw e
    }
  }
}
