import { transform } from 'babel-standalone';

const compile = (code, scope = {}) => {
  return transform(`
    (function (${Object.keys(scope).join(',')}) {
      ${code}
    })
    `, { presets: ['es2015', 'react', 'stage-1'] }).code
}

export default compile
