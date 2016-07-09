import showdown from 'showdown'

const quiz = {
  quizName: 'Create array methods',
  quizIntro: intro(),
  quizStarted: false,
  problemList: [
    problem1(), problem2(), problem3(), problem4(), problem5(),
    problem6(), problem7()
  ]
}
export default quiz

function problem1 () {
  return {
    title: 'Implement xforEach',
    description: `
  Create an xforEach method that works on native arrays. It should traverse an array and take a callback.
    `,
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
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
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

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }
}

function problem2 () {
  return {
    title: 'Implement xmap',
    description: `
  To make projections easier, let's add a xmap() function to the Array type. Map accepts the projection function to be applied to each item in the source array, and returns the projected array.
    `,
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
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_EXISTS: info.code !== '',
          CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xmap =/.test(info.code),
          XMAP_PERFORMS_CORRECTLY: (function () {
            function foo(x, i) { return {a:x,b:i} }
            var result = [1,2].xmap(foo)
            return JSON.stringify(result) === JSON.stringify([{a:1,b:0},{a:2,b:1}])
          }())
        }

        return (
          tests.CODE_EXISTS
          && tests.CODE_HAS_ARRAY_PROTO
          && tests.XMAP_PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }
}

function problem3 () {
  return {
    title: 'Implement xfilter',
    description: `
  To make filtering easier, let's add a xfilter() function to the Array type. The xfilter() function accepts a predicate. A predicate is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.
    `,
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
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_EXISTS: info.code !== '',
          CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xfilter =/.test(info.code),
          XFILTER_PERFORMS_CORRECTLY: (function () {
            function foo(x, i) { return x % 2 == 0  }
            var result = [1,2].xfilter(foo)
            return JSON.stringify(result) === JSON.stringify([2])
          }())
        }

        return (
          tests.CODE_EXISTS
          && tests.CODE_HAS_ARRAY_PROTO
          && tests.XFILTER_PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }
}

function problem4 () {
  return {
    title: 'Implement xreduce',
    description: `
  Let's add a xreduce() function to the Array type. Like map. Take note this is different from the reduce in ES5, which returns an value instead of an Array!
    `,
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
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_EXISTS: info.code !== '',
          CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xreduce =/.test(info.code),
          XREDUCE_PERFORMS_CORRECTLY: (function () {
            function foo(a, c) { return a + c }
            var result = [1,2].xreduce(foo, 0)
            return JSON.stringify(result) === JSON.stringify(3)
          }())
        }

        return (
          tests.CODE_EXISTS
          && tests.CODE_HAS_ARRAY_PROTO
          && tests.XREDUCE_PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }
}

function problem5 () {
  return {
    title: 'Implement xconcatAll',
    description: `
  Let's add a xconcatAll() function to the Array type. The xconcatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the xconcatAll() function expects each item in the array to be another array.
    `,
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
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_EXISTS: info.code !== '',
          CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xconcatAll =/.test(info.code),
          XCONCATALL_PERFORMS_CORRECTLY: (function () {
            var result = [[1,2], [3,4]].xconcatAll()
            return JSON.stringify(result) === JSON.stringify([1,2,3,4])
          }())
        }

        return (
          tests.CODE_EXISTS
          && tests.CODE_HAS_ARRAY_PROTO
          && tests.XCONCATALL_PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }
}

function problem6 () {
  return {
    title: 'Implement xconcatMap',
    description: `
  Nearly every time we flatten a tree we chain xmap() and xconcatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a xconcatMap function that's just a xmap operation, followed by a xconcatAll.
    `,
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
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_EXISTS: info.code !== '',
          CODE_HAS_ARRAY_PROTO: /Array\.prototype\.xconcatMap =/.test(info.code),
          XCONCATMAP_PERFORMS_CORRECTLY: (function () {
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
          && tests.XCONCATMAP_PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }
}

function problem7 () {
  return {
    title: 'Implement xzip',
    description: `
  Let's add a static xzip() function to the Array type. The xzip function accepts a combiner function, traverses each array at the same time, and calls the combiner function on the current item on the left-hand-side and right-hand-side. The xzip function requires an item from each array in order to call the combiner function, therefore the array returned by xzip will only be as large as the smallest input array.
    `,
    data: {
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  Array.xzip = function (left, right, combinerFn) {
    let result = []
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
      result.push(combinerFn(left[i], right[i]))
    }
    return result
  }
      `,
      result: 'undefined',
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_EXISTS: info.code !== '',
          CODE_HAS_ARRAY_PROTO: /Array\.xzip =/.test(info.code),
          XZIP_PERFORMS_CORRECTLY: (function () {
            const result = Array.xzip(
              [1,3,5],
              [2,4,6],
              (left, right) => [left, right]
            )
            return JSON.stringify(result) === JSON.stringify([[1,2],[3,4],[5,6]])
          }())
        }

        return (
          tests.CODE_EXISTS
          && tests.CODE_HAS_ARRAY_PROTO
          && tests.XZIP_PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }
}

function intro () {
  const converter = new showdown.Converter()
  const markdownText = `
## Create Array Methods
  `
  return converter.makeHtml(markdownText)
}
