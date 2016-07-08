import showdown from 'showdown'
import jsonCompare from 'utils/jsonCompare'

const quiz = {
  quizName: 'Apply array methods',
  quizIntro: intro(),
  quizStarted: false,
  problemList: [
    problem1(), problem2(), problem3(), problem4(), problem5(),
    problem6(), problem7(), problem8(), problem9(), problem10(),
    problem11(), problem12(), problem13(), problem14(), problem15(),
    problem16(), problem17()

  ]
}

export default quiz

function problem1 () {
  return {
    title: '',
    description: 'Traverse names using xforEach to return an array of names.',
    data: {
      names: names()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {names} = scope.problemData
  const result = []
  names.xforEach((name) => result.push(name))
  return result
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_USES_METHOD: /xforEach/.test(info.code),
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }
        return (
          tests.CODE_USES_METHOD &&
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [ 'one', 'two', 'three' ]
  }
}

function problem2 () {
  return {
    title: '',
    description: 'Project a collection containing id and title using xmap.',
    data: {
      newReleases: newReleases()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {newReleases} = scope.problemData
  return newReleases.xmap((movie) => ({ id: movie.id, title: movie.title }))
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_USES_METHOD: /xmap/.test(info.code),
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }
        return (
          tests.CODE_USES_METHOD &&
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { id: 70111470, title: 'Die Hard' },
      { id: 654356453, title: 'Bad Boys' },
      { id: 65432445, title: 'The Chamber' },
      { id: 675465, title: 'Fracture' }
    ]
  }
}

function problem3 () {
  return {
    title: '',
    description: 'Capture videos with 5.0 rating using xfilter.',
    data: {
      newReleases: newReleases()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {newReleases} = scope.problemData
  return newReleases.xfilter((movie) => movie.rating == 5.0)
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_USES_METHOD: /xfilter/.test(info.code),
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }
        return (
          tests.CODE_USES_METHOD &&
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { id: 654356453,
        title: 'Bad Boys',
        boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [ 5 ],
        bookmark: [
          { id: 432534, time: 65876586 }
        ]
      },
      { id: 675465,
        title: 'Fracture',
        boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [ 5 ],
        bookmark: [
          { id: 432534, time: 65876586 }
        ]
      }
    ]
  }
}

function problem4 () {
  return {
    title: '',
    description: 'Capture id of videos with 5.0 rating using chain of xfilter and xmap.',
    data: {
      newReleases: newReleases()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {newReleases} = scope.problemData
  return newReleases
    .xfilter(movie => movie.rating == 5.0)
    .xmap(movie => movie.id)
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          CODE_USES_METHOD: (
            /xfilter/.test(info.code) &&
            /xmap/.test(info.code)
          ),
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }
        return (
          tests.CODE_USES_METHOD &&
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [ 654356453, 675465 ]
  }
}

function problem5 () {
  return {
    title: '',
    description: 'Flatten the movieLists array into an array of video ids.',
    data: {
      movieLists: movieLists()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {movieLists} = scope.problemData
  return movieLists
  .reduce((acc, category) => {
    category.videos.forEach(movie => acc.push(movie.id))
    return acc
  }, [])
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [ 70111470, 654356453, 65432445, 675465 ]
  }
}

function problem6 () {
  return {
    title: '',
    description: 'Flatten the movieLists array into an array of video ids using xmap and xconcatAll.',
    data: {
      movieLists: movieLists()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {movieLists} = scope.problemData
  return movieLists
    .xmap(category => category.videos.xmap(video => video.id))
    .xconcatAll()
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [ 70111470, 654356453, 65432445, 675465 ]
  }
}

function problem7 () {
  return {
    title: '',
    description: 'Retrieve id, title, and a 150x200 boxarts url for every video.',
    data: {
      movieLists: movieLists()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {movieLists} = scope.problemData
  return movieLists.xmap(category =>
    category.videos.xmap(video =>
      video.boxarts
        .xfilter(boxart => boxart.width === 150)
        .xmap(boxart => ({id: video.id, title: video.title, boxart: boxart.url}))
    ).xconcatAll()
  ).xconcatAll()
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { id: 70111470,
        title: 'Die Hard',
        boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'
      },
      { id: 654356453,
        title: 'Bad Boys',
        boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg'
      },
      { id: 65432445,
        title: 'The Chamber',
        boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg'
      },
      { id: 675465,
        title: 'Fracture',
        boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg'
      }
    ]
  }
}

function problem8 () {
  return {
    title: '',
    description: 'Retrieve id, title, and a 150x200 boxarts url for every video using xconcatMap.',
    data: {
      movieLists: movieLists()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {movieLists} = scope.problemData
  return movieLists.xconcatMap(category =>
    category.videos.xconcatMap(video =>
      video.boxarts
        .xfilter(boxart => boxart.width === 150)
        .xmap(boxart => ({id: video.id, title: video.title, boxart: boxart.url}))
    )
  )
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { id: 70111470,
        title: 'Die Hard',
        boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'
      },
      { id: 654356453,
        title: 'Bad Boys',
        boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg'
      },
      { id: 65432445,
        title: 'The Chamber',
        boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg'
      },
      { id: 675465,
        title: 'Fracture',
        boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg'
      }
    ]
  }
}

function problem9 () {
  return {
    title: '',
    description: 'Use xforEach to find the largest boxart.',
    data: {
      boxarts: boxarts()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {boxarts} = scope.problemData
  let currentSize
  let maxSize = -1
  let largestBoxart
  boxarts.xforEach((boxart) => {
    currentSize = boxart.width * boxart.height
    if (currentSize > maxSize) {
      largestBoxart = boxart
      maxSize = currentSize
    }
  })
  return largestBoxart
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return {
      width: 425,
      height: 150,
      url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg'
    }
  }
}

function problem10 () {
  return {
    title: '',
    description: 'Use xreduce to retrieve the largest rating.',
    data: {
      ratings: ratings()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {ratings} = scope.problemData
  return ratings.xreduce((acc, curr) => (acc > curr) ? acc : curr, 0)
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return 5
  }
}

function problem11 () {
  return {
    title: '',
    description: 'Use xreduce to retrieve the url of the largest boxart.',
    data: {
      boxarts: boxarts()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {boxarts} = scope.problemData
  return boxarts
    .xreduce((acc, curr) => (acc.width * acc.height > curr.width * curr.height) ? [acc] : [curr], {})
    .xmap(art => art.url)
      `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [ 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg' ]
  }
}

function problem12 () {
  return {
    title: '',
    description: 'Retrieve the id, title, and smallest box art url for every video.',
    data: {
      movieLists: movieLists()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {movieLists} = scope.problemData
  return movieLists.xconcatMap(category =>
    category.videos.xconcatMap(video =>
      video.boxarts.xreduce((acc, curr) =>
        (acc.width * acc.height < curr.width * curr.height) ? [acc] : [curr],
        {}
      )
      .xmap(art => {
        return {id: video.id, title: video.title, boxart: art.url}
      })
    )
  )
    `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { id: 70111470, title: 'Die Hard', boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg' },
      { id: 654356453, title: 'Bad Boys', boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' },
      { id: 65432445, title: 'The Chamber', boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg' },
      { id: 675465, title: 'Fracture', boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' }
    ]
  }
}

function problem13 () {
  return {
    title: '',
    description: 'Combine videos and bookmarks by index using for-loop.',
    data: {
      videos: videos(),
      bookmarks: bookmarks()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {videos, bookmarks} = scope.problemData
  let videoIdAndBookmarkIdPairs = [];

  for(let counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id})
  }

  return videoIdAndBookmarkIdPairs;
    `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { videoId: 65432445, bookmarkId: 470 },
      { videoId: 675465, bookmarkId: 453 },
      { videoId: 70111470, bookmarkId: 445 }
    ]
  }
}

function problem14 () {
  return {
    title: '',
    description: 'Combine videos and bookmarks by index using Array.zip.',
    data: {
      videos: videos(),
      bookmarks: bookmarks()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {videos, bookmarks} = scope.problemData
  return Array.xzip(videos, bookmarks, (a,b) => ({ videoId: a.id, bookmarkId: b.id }))
    `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { videoId: 65432445, bookmarkId: 470 },
      { videoId: 675465, bookmarkId: 453 },
      { videoId: 70111470, bookmarkId: 445 }
    ]
  }
}

function problem15 () {
  return {
    title: '',
    description: 'Retrieve each video id, title, middle interesting moment time, and smallest boxart url.',
    data: {
      movieLists: movieLists2()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {movieLists} = scope.problemData
  return movieLists.xconcatMap(category =>
    category.videos.xconcatMap(video =>
      Array.xzip(
        video.boxarts.xreduce(
          (acc, curr) => (acc.width * acc.height < curr.width * curr.height) ? [acc] : [curr]
          , {}
        ),
        video.interestingMoments.xfilter(moment => moment.type == 'Middle'),
        (a,b) => ({id: video.id, title: video.title, time: b.time, url: a.url})
      )
    )
  )
    `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { id: 70111470,
        title: 'Die Hard',
        time: 323133,
        url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg'
      },
      { id: 654356453,
        title: 'Bad Boys',
        time: 6575665,
        url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg'
      },
      { id: 65432445,
        title: 'The Chamber',
        time: 3452343,
        url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg'
      },
      { id: 675465,
        title: 'Fracture',
        time: 3453434,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg'
      }
    ]
  }
}

function problem16 () {
  return {
    title: '',
    description: 'Convert Arrays to Trees.',
    data: {
      lists: powerLists(),
      videos: powerVideos()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {lists, videos} = scope.problemData
  return lists.xmap(category => ({
  name: category.name,
  videos: videos
    .xfilter(video => video.listId == category.id)
    .xmap(video => ({id: video.id, title: video.title}))
  }))
    `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      {
        name: 'New Releases',
        videos: [
          { id: 65432445, title: 'The Chamber' },
          { id: 675465, title: 'Fracture' }
        ]
      },
      {
        name: 'Thrillers',
        videos: [
          { id: 70111470, title: 'Die Hard' },
          { id: 654356453, title: 'Bad Boys' }
        ]
      }
    ]
  }
}

function problem17 () {
  return {
    title: '',
    description: 'Convert Arrays to Trees.',
    data: {
      lists: powerLists(),
      videos: powerVideos(),
      boxarts: powerBoxarts(),
      bookmarks: powerBookmarks()
    },
    user: {
      algorithm: '',
      result: '',
      solved: false
    },
    solution: {
      algorithm: `
  const {lists, videos, boxarts, bookmarks} = scope.problemData
  return lists.xmap(category => ({
    name: category.name,
    videos: videos
      .xfilter(video => video.listId == category.id)
      .xconcatMap(video =>
        Array.xzip(
          bookmarks.xfilter(b => b.videoId == video.id).map(b => b.time),
          boxarts.xfilter(b => b.videoId == video.id)
            .xreduce(
              (acc, curr) => (acc.width * acc.height < curr.width * curr.height) ? [acc] : [curr],
              {}
            )
            .xmap(b => b.url),
          (time, boxart) => {
            return {
              id: video.id,
              title: video.title,
              time: time,
              boxart: boxart
            }
          }
        )
      )
  }))
    `,
      result: getResult(),
      checkUserResult: checkUserResultsScript()
    }
  }

  function checkUserResultsScript () {
    return `
      function checkScript () {
        const tests = {
          PERFORMS_CORRECTLY: scope.jsonCompare(
            userScript(),
            ${JSON.stringify(getResult())}
          )
        }

        return (
          tests.PERFORMS_CORRECTLY
        )
      }

      return {
        runResult: userScript(),
        successResult: checkScript()
      }
    `
  }

  function getResult () {
    return [
      { name: 'New Releases',
        videos: [
          { id: 65432445,
            title: 'The Chamber',
            time: 32432,
            boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg'
          },
          { id: 675465,
            title: 'Fracture',
            time: 3534543,
            boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg'
          }
        ]
      },
      { name: 'Thrillers',
        videos: [
          { id: 70111470,
            title: 'Die Hard',
            time: 645243,
            boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg'
          },
          { id: 654356453,
            title: 'Bad Boys',
            time: 984934,
            boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg'
          }
        ]
      }
    ]
  }
}

function names () {
  return ['one', 'two', 'three']
}

function newReleases () {
  return [
    {
      'id': 70111470,
      'title': 'Die Hard',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [4.0],
      'bookmark': []
    },
    {
      'id': 654356453,
      'title': 'Bad Boys',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [5.0],
      'bookmark': [{ id: 432534, time: 65876586 }]
    },
    {
      'id': 65432445,
      'title': 'The Chamber',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [4.0],
      'bookmark': []
    },
    {
      'id': 675465,
      'title': 'Fracture',
      'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
      'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
      'rating': [5.0],
      'bookmark': [ { id: 432534, time: 65876586 } ]
    }
  ]
}

function movieLists () {
  return [
    {
      name: 'Instant Queue',
      videos: [
        {
          'id': 70111470,
          'title': 'Die Hard',
          'boxarts': [
            { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg' }
          ],
          'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': 4.0,
          'bookmark': []
        },
        {
          'id': 654356453,
          'title': 'Bad Boys',
          'boxarts': [
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg' },
            { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' }

          ],
          'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': 5.0,
          'bookmark': [{ id: 432534, time: 65876586 }]
        }
      ]
    },
    {
      name: 'New Releases',
      videos: [
        {
          'id': 65432445,
          'title': 'The Chamber',
          'boxarts': [
            { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg' }
          ],
          'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': 4.0,
          'bookmark': []
        },
        {
          'id': 675465,
          'title': 'Fracture',
          'boxarts': [
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg' },
            { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' },
            { width: 300, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' }
          ],
          'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': 5.0,
          'bookmark': [{ id: 432534, time: 65876586 }]
        }
      ]
    }
  ]
}

function boxarts () {
  return [
    { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg' },
    { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' },
    { width: 300, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' },
    { width: 425, height: 150, url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg' }
  ]
}

function ratings () {
  return [2, 3, 1, 4, 5]
}

function videos () {
  return [
    { 'id': 65432445, 'title': 'The Chamber' },
    { 'id': 675465, 'title': 'Fracture' },
    { 'id': 70111470, 'title': 'Die Hard' },
    { 'id': 654356453, 'title': 'Bad Boys' }
  ]
}

function bookmarks () {
  return [
    {id: 470, time: 23432},
    {id: 453, time: 234324},
    {id: 445, time: 987834}
  ]
}

function movieLists2 () {
  return [
    {
      name: 'New Releases',
      videos: [
        {
          'id': 70111470,
          'title': 'Die Hard',
          'boxarts': [
            { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg' }
          ],
          'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': 4.0,
          'interestingMoments': [
            { type: 'End', time: 213432 },
            { type: 'Start', time: 64534 },
            { type: 'Middle', time: 323133 }
          ]
        },
        {
          'id': 654356453,
          'title': 'Bad Boys',
          'boxarts': [
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg' },
            { width: 140, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg' }

          ],
          'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': 5.0,
          'interestingMoments': [
            { type: 'End', time: 54654754 },
            { type: 'Start', time: 43524243 },
            { type: 'Middle', time: 6575665 }
          ]
        }
      ]
    },
    {
      name: 'Instant Queue',
      videos: [
        {
          'id': 65432445,
          'title': 'The Chamber',
          'boxarts': [
            { width: 130, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg' },
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg' }
          ],
          'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': 4.0,
          'interestingMoments': [
            { type: 'End', time: 132423 },
            { type: 'Start', time: 54637425 },
            { type: 'Middle', time: 3452343 }
          ]
        },
        {
          'id': 675465,
          'title': 'Fracture',
          'boxarts': [
            { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg' },
            { width: 120, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg' },
            { width: 300, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' }
          ],
          'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
          'rating': 5.0,
          'interestingMoments': [
            { type: 'End', time: 45632456 },
            { type: 'Start', time: 234534 },
            { type: 'Middle', time: 3453434 }
          ]
        }
      ]
    }
  ]
}

function powerLists () {
  return [
    {
      'id': 5434364,
      'name': 'New Releases'
    },
    {
      'id': 65456475,
      name: 'Thrillers'
    }
  ]
}

function powerVideos () {
  return [
    {
      'listId': 5434364,
      'id': 65432445,
      'title': 'The Chamber'
    },
    {
      'listId': 5434364,
      'id': 675465,
      'title': 'Fracture'
    },
    {
      'listId': 65456475,
      'id': 70111470,
      'title': 'Die Hard'
    },
    {
      'listId': 65456475,
      'id': 654356453,
      'title': 'Bad Boys'
    }
  ]
}

function powerBoxarts () {
  return [
    { videoId: 65432445, width: 130, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg' },
    { videoId: 65432445, width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg' },
    { videoId: 675465, width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg' },
    { videoId: 675465, width: 120, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg' },
    { videoId: 675465, width: 300, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' },
    { videoId: 70111470, width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
    { videoId: 70111470, width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg' },
    { videoId: 654356453, width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg' },
    { videoId: 654356453, width: 140, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg' }
  ]
}

function powerBookmarks () {
  return [
    { videoId: 65432445, time: 32432 },
    { videoId: 675465, time: 3534543 },
    { videoId: 70111470, time: 645243 },
    { videoId: 654356453, time: 984934 }
  ]
}

const browserArrayMethods = {
  forEach: Array.prototype.forEach,
  map: Array.prototype.map,
  filter: Array.prototype.filter,
  reduce: Array.prototype.reduce,
  concatAll: Array.prototype.concatAll,
  concatMap: Array.prototype.concatMap,
  zip: Array.prototzip
}

const customArrayMethods = {
  xforEach: function (fn) {
    return this.reduce((acc, curr, i) => {
      fn(curr, i)
    }, [])
  },
  xmap: function (fn) {
    return this.reduce((acc, curr, i) => {
      acc.push(fn(this[i], i))
      return acc
    }, [])
  },
  xfilter: function (fn) {
    return this.reduce((acc, curr, i) => {
      if (fn(this[i])) {
        acc.push(this[i])
      }
      return acc
    }, [])
  },
  xreduce: function (fn, initialValue) {
    let acc = initialValue
    for (var i = 0; i < this.length; i++) {
      acc = fn(acc, this[i], i)
    }
    return acc
  },
  xconcatAll: function () {
    return this.reduce((acc, curr, i) => {
      curr.forEach((item) => acc.push(item))
      return acc
    }, [])
  },
  xconcatMap: function (fnReturningArray) {
    return this.map((item) => fnReturningArray(item))
      .xconcatAll()
  },
  xzip: function (left, right, combinerFn) {
    let result = []
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
      result.push(combinerFn(left[i], right[i]))
    }
    return result
  }
}

const setBrowserArrayMethods = () => { // eslint-disable-line
  Object.keys(browserArrayMethods).forEach((method) => {
    if (method === 'xzip') {
      Array.xzip = browserArrayMethods.xzip
    } else {
       Array.prototype[method] = browserArrayMethods[method] // eslint-disable-line
    }
  })
}

const setCustomArrayMethods = () => {
  Object.keys(customArrayMethods).forEach((method) => {
    if (method === 'xzip') {
      Array.xzip = customArrayMethods.xzip
    } else {
       Array.prototype[method] = customArrayMethods[method] // eslint-disable-line
    }
  })
}

setCustomArrayMethods()

function intro () {
  const converter = new showdown.Converter()
  const markdownText = `
## Apply Array Methods
  `
  return converter.makeHtml(markdownText)
}
