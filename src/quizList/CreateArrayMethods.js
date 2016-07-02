import showdown from 'showdown'

export default {
  quizName: 'Create array methods',
  quizIntro: intro(),
  quizStarted: false,
  problemList: [
    {
      description: 'Create a xforEach method that works on native arrays.',
      data: {
      },
      user: {
        algorithm: '',
        result: '',
        solved: false
      },
      solution: {
        algorithm: `
Array.prototype.xforEach = function (fn) {
  return this.reduce((acc, curr, i) => {
    fn(curr, i)
  }, [])
};
        `,
        result: 'undefined',
        checkUserResult: `
// check script
//.........................
function checkScript () {

  const tests = {
    CODE_EXISTS: info.code !== '',
    CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xforEach =/.test(info.code),
    FOREACH_PERFORMS_CORRECTLY: (function () {
      var result = []
      function foo(x, i) { result.push({a:x,b:i}) }
      [1,2].xforEach(foo)
      return JSON.stringify(result) === JSON.stringify([{a:1,b:0},{a:2,b:1}])
    }())
  }

  return (
    tests.CODE_EXISTS
    && tests.CODE_HAS_ARRAY_PROTO
    && tests.FOREACH_PERFORMS_CORRECTLY
  )
}

// return resultObject
//.........................
return {
  runResult: userScript(),
  successResult: checkScript()
}
        `
      }
    },
    {
      description: 'Create a xmap method that works on native arrays.',
      data: {
      },
      user: {
        algorithm: '',
        result: '',
        solved: false
      },
      solution: {
        algorithm: `
Array.prototype.xmap = function (fn) {
  return this.reduce((acc, curr, i) => {
    acc.push(fn(curr, i))
    return acc
  }, [])
};
        `,
        result: 'undefined',
        checkUserResult: `
// check script
//.........................
function checkScript () {

  const tests = {
    CODE_EXISTS: info.code !== '',
    CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xmap =/.test(info.code),
    FOREACH_PERFORMS_CORRECTLY: (function () {
      function foo(x, i) { return {a:x,b:i} }
      var result = [1,2].xmap(foo)
      return JSON.stringify(result) === JSON.stringify([{a:1,b:0},{a:2,b:1}])
    }())
  }

  return (
    tests.CODE_EXISTS
    && tests.CODE_HAS_ARRAY_PROTO
    && tests.FOREACH_PERFORMS_CORRECTLY
  )
}

// return resultObject
//.........................
return {
  runResult: userScript(),
  successResult: checkScript()
}
        `
      }
    },
    {
      description: 'Create a xfilter method that works on native arrays.',
      data: {
      },
      user: {
        algorithm: '',
        result: '',
        solved: false
      },
      solution: {
        algorithm: `
Array.prototype.xfilter = function (fn) {
  return this.reduce((acc, curr, i) => {
    if (fn(curr)) {
      acc.push(curr)
    }
    return acc
  }, [])
};
        `,
        result: 'undefined',
        checkUserResult: `
// check script
//.........................
function checkScript () {

  const tests = {
    CODE_EXISTS: info.code !== '',
    CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xfilter =/.test(info.code),
    FOREACH_PERFORMS_CORRECTLY: (function () {
      function foo(x, i) { return x % 2 == 0  }
      var result = [1,2].xfilter(foo)
      return JSON.stringify(result) === JSON.stringify([2])
    }())
  }

  return (
    tests.CODE_EXISTS
    && tests.CODE_HAS_ARRAY_PROTO
    && tests.FOREACH_PERFORMS_CORRECTLY
  )
}

// return resultObject
//.........................
return {
  runResult: userScript(),
  successResult: checkScript()
}
        `
      }
    },
    {
      description: 'Create a xreduce method that works on native arrays.',
      data: {
      },
      user: {
        algorithm: '',
        result: '',
        solved: false
      },
      solution: {
        algorithm: `
Array.prototype.xreduce = function (fn, initialValue) {
  let acc = initialValue
  for (var i = 0; i < this.length; i++) {
    acc = fn(acc, this[i], i)
  }
  return acc
};
        `,
        result: 'undefined',
        checkUserResult: `
// check script
//.........................
function checkScript () {

  const tests = {
    CODE_EXISTS: info.code !== '',
    CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xreduce =/.test(info.code),
    FOREACH_PERFORMS_CORRECTLY: (function () {
      function foo(a, c) { return a + c }
      var result = [1,2].xreduce(foo, 0)
      return JSON.stringify(result) === JSON.stringify(3)
    }())
  }

  return (
    tests.CODE_EXISTS
    && tests.CODE_HAS_ARRAY_PROTO
    && tests.FOREACH_PERFORMS_CORRECTLY
  )
}

// return resultObject
//.........................
return {
  runResult: userScript(),
  successResult: checkScript()
}
        `
      }
    },
    {
      description: 'Create a xconcatAll method that works on native arrays.',
      data: {
      },
      user: {
        algorithm: '',
        result: '',
        solved: false
      },
      solution: {
        algorithm: `
Array.prototype.xconcatAll = function () {
  return this.reduce((acc, curr, i) => {
    curr.forEach((item) => acc.push(item))
    return acc
  }, [])
};
        `,
        result: 'undefined',
        checkUserResult: `
// check script
//.........................
function checkScript () {

  const tests = {
    CODE_EXISTS: info.code !== '',
    CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xconcatAll =/.test(info.code),
    FOREACH_PERFORMS_CORRECTLY: (function () {
      var result = [[1,2], [3,4]].xconcatAll()
      return JSON.stringify(result) === JSON.stringify([1,2,3,4])
    }())
  }

  return (
    tests.CODE_EXISTS
    && tests.CODE_HAS_ARRAY_PROTO
    && tests.FOREACH_PERFORMS_CORRECTLY
  )
}

// return resultObject
//.........................
return {
  runResult: userScript(),
  successResult: checkScript()
}
        `
      }
    },
    {
      description: 'Create a xconcatMap method that works on native arrays.',
      data: {
      },
      user: {
        algorithm: '',
        result: '',
        solved: false
      },
      solution: {
        algorithm: `
Array.prototype.xconcatAll = function () {
  return this.reduce((acc, curr, i) => {
    curr.forEach((item) => acc.push(item))
    return acc
  }, [])
};

Array.prototype.xconcatMap = function (fnReturningArray) {
  return this.map((item) => fnReturningArray(item))
    .xconcatAll()
};
        `,
        result: 'undefined',
        checkUserResult: `
// check script
//.........................
function checkScript () {

  const tests = {
    CODE_EXISTS: info.code !== '',
    CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xconcatMap =/.test(info.code),
    FOREACH_PERFORMS_CORRECTLY: (function () {
      var foo = function (innerArray) {
        return innerArray.map(function (n) { return n + 1 })
      }
      var result = [[1,2], [3,4]].xconcatMap(foo)
      return JSON.stringify(result) === JSON.stringify([2, 3, 4, 5])
    }())
  }

  return (
    tests.CODE_EXISTS
    && tests.CODE_HAS_ARRAY_PROTO
    && tests.FOREACH_PERFORMS_CORRECTLY
  )
}

// return resultObject
//.........................
return {
  runResult: userScript(),
  successResult: checkScript()
}
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



// console.log([].xconcatAll)
// console.log([].xconcatMap)
// var foo = function (a) {
//   console.log('a', a)
//   // return a.map(function (x) { return x.map(
//   //   function (n) { return n + 1 }
//   // )})
// }
// var result = [[1,2], [3,4]].xconcatMap(foo)
// console.log(11, result)
// return JSON.stringify(result) === JSON.stringify([2, 3, 4, 5])
