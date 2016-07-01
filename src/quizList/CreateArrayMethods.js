import showdown from 'showdown'

export default {
  quizName: 'Create array methods',
  quizIntro: intro(),
  quizStarted: false,
  problemList: [
    {
      description: 'Create forEach method.',
      data: {
        names: ''
      },
      user: {
        algorithm: '',
        result: '',
        solved: false
      },
      solution: {
        algorithm: `
Array.prototype.forEach = function (fn) {
  return this.reduce((acc, curr, i) => {
    fn(curr, i)
  }, [])
}
        `,
        result: `
running unit tests against your code
        `,
        checkUserResult: `
//...............................
// insert user code here
var result = []
function foo(x, i) { result.push({a:x,b:i}) }
[1,2].forEach(foo)
return JSON.stringify(result) === JSON.stringify([{a:1,b:0},{a:2,b:1}])
//...............................
        `
      }
    }
  ]
}

function intro () {
  const converter = new showdown.Converter()
  const markdownText = `
## Create Array Methods
  `
  return converter.makeHtml(markdownText)
}
