import { transform } from 'babel-standalone';

const compile = (code) => {
  return transform(`
    (function (scope) {
      ${code}
    })
    `, { presets: ['es2015', 'react', 'stage-1'] }).code
}

export default compile
