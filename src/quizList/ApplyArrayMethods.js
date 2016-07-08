import showdown from 'showdown'
import jsonCompare from 'utils/jsonCompare'

const results = {
  a: `
    ["one", "two", "three"]
  `,
  b: `
    [
      { "id": 70111470, "title": "Die Hard" },
      { "id": 654356453, "title": "Bad Boys" },
      { "id": 65432445, "title": "The Chamber" },
      { "id": 675465, "title": "Fracture" }
    ]
  `,
  c: `
    [
      { "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [ 5 ],
        "bookmark": [
            { "id": 432534, "time": 65876586 }
        ]
      },
      { "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [ 5 ],
        "bookmark": [
          { "id": 432534, "time": 65876586 }
        ]
      }
    ]
  `,
  d: `
    [ 654356453, 675465 ]
  `,
  e: `
    [ 70111470, 654356453, 65432445, 675465 ]
  `,
  f: `
    [ 70111470, 654356453, 65432445, 675465 ]
  `,
  g: `
    [
      { "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
      },
      { "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
      },
      { "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
      },
      { "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
      }
    ]
  `,
  h: `
    [
      { "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
      },
      { "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
      },
      { "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
      },
      { "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
      }
    ]
  `
}

export default {
  quizName: 'Apply array methods',
  quizIntro: intro(),
  quizStarted: false,
  problemList: [
    {
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
        result: getResultJS('a'),
        checkUserResult: `
function checkScript () {
  const tests = {
    CODE_USES_METHOD: /xforEach/.test(info.code),
    PERFORMS_CORRECTLY: scope.jsonCompare(userScript(), ${getResult('a')})
  }
  return (
    tests.CODE_USES_METHOD &&
    tests.PERFORMS_CORRECTLY
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
        result: getResultJS('b'),
        checkUserResult: `
function checkScript () {
  const tests = {
    CODE_USES_METHOD: /xmap/.test(info.code),
    PERFORMS_CORRECTLY: scope.jsonCompare(
      userScript(),
      ${getResult('b')}
    )
  }
  console.log(tests)
  return (
    tests.CODE_USES_METHOD &&
    tests.PERFORMS_CORRECTLY
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
        result: getResultJS('c'),
        checkUserResult: `
function checkScript () {
  const tests = {
    CODE_USES_METHOD: /xfilter/.test(info.code),
    PERFORMS_CORRECTLY: scope.jsonCompare(
      userScript(),
      ${getResult('c')}
    )
  }
  console.log(tests)
  return (
    tests.CODE_USES_METHOD &&
    tests.PERFORMS_CORRECTLY
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
        result: getResultJS('c'),
        checkUserResult: `
function checkScript () {
  const tests = {
    CODE_USES_METHOD: /xfilter/.test(info.code)
    && /xmap/.test(info.code),
    PERFORMS_CORRECTLY: scope.jsonCompare(
      userScript(),
      ${getResult('d')}
    )
  }
  console.log(tests)
  return (
    tests.CODE_USES_METHOD &&
    tests.PERFORMS_CORRECTLY
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
        result: getResultJS('e'),
        checkUserResult: `
function checkScript () {
  const tests = {
    PERFORMS_CORRECTLY: scope.jsonCompare(
      userScript(),
      ${getResult('e')}
    )
  }
  return (
    tests.PERFORMS_CORRECTLY
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
      title: '',
      description: 'Flatten the movieLists array into an array of video ids using map and concatAll.',
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
        result: getResultJS('f'),
        checkUserResult: `
function checkScript () {
  const tests = {
    PERFORMS_CORRECTLY: scope.jsonCompare(
      userScript(),
      ${getResult('f')}
    )
  }
  return (
    tests.PERFORMS_CORRECTLY
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
  )
  .xconcatAll()
)
.xconcatAll()
        `,
        result: getResultJS('g'),
        checkUserResult: `
function checkScript () {
  const tests = {
    PERFORMS_CORRECTLY: scope.jsonCompare(
      userScript(),
      ${getResult('g')}
    )
  }
  return (
    tests.PERFORMS_CORRECTLY
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
      title: '',
      description: 'Retrieve id, title, and a 150x200 boxarts url for every video using concatMap.',
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
        result: getResultJS('h'),
        checkUserResult: `
function checkScript () {
  const tests = {
    PERFORMS_CORRECTLY: scope.jsonCompare(
      userScript(),
      ${getResult('h')}
    )
  }
  return (
    tests.PERFORMS_CORRECTLY
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
      title: '',
      description: 'Use forEach to find the largest boxart.',
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
const {boxarts} = problemData
let currentSize
let maxSize = -1
let largestBoxart
boxarts.forEach((boxart) => {
  currentSize = boxart.width * boxart.height
  if (currentSize > maxSize) {
    largestBoxart = boxart
    maxSize = currentSize
  }
})
return largestBoxart
        `,
        result: {
          width: 425,
          height: 150,
          url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg'
        }
      }
    },
    {
      title: '',
      description: 'Use reduce to retrieve the largest rating.',
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
const {ratings} = problemData
return ratings.reduce((acc, curr) => (acc > curr) ? acc : curr, 0)
        `,
        result: 5
      }
    },
    {
      title: '',
      description: 'Use reduce to retrieve the url of the largest boxart.',
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
const {boxarts} = problemData
return boxarts
  .reduce((acc, curr) => (acc.width * acc.height > curr.width * curr.height) ? [acc] : [curr], {})
  .map(art => art.url)
        `,
        result: [ 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg' ]
      }
    },
    {
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
const {movieLists} = problemData
return movieLists.concatMap(category =>
  category.videos.concatMap(video =>
    video.boxarts.reduce((acc, curr) =>
      (acc.width * acc.height < curr.width * curr.height) ? [acc] : [curr],
      {}
    )
    .map(art => {
      return {id: video.id, title: video.title, boxart: art.url}
    })
  )
)
      `,
        result: [
          { id: 70111470, title: 'Die Hard', boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg' },
          { id: 654356453, title: 'Bad Boys', boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' },
          { id: 65432445, title: 'The Chamber', boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg' },
          { id: 675465, title: 'Fracture', boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' }
        ]
      }
    },
    {
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
const {videos, bookmarks} = problemData
let videoIdAndBookmarkIdPairs = [];

for(let counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
  videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id})
}

return videoIdAndBookmarkIdPairs;
      `,
        result: [
          { videoId: 65432445, bookmarkId: 470 },
          { videoId: 675465, bookmarkId: 453 },
          { videoId: 70111470, bookmarkId: 445 }
        ]
      }
    },
    {
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
const {videos, bookmarks} = problemData
return Array.zip(videos, bookmarks, (a,b) => ({ videoId: a.id, bookmarkId: b.id }))
      `,
        result: [
          { videoId: 65432445, bookmarkId: 470 },
          { videoId: 675465, bookmarkId: 453 },
          { videoId: 70111470, bookmarkId: 445 }
        ]
      }
    },
    {
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
const {movieLists} = problemData
return movieLists.concatMap(category =>
  category.videos.concatMap(video =>
    Array.zip(
      video.boxarts.reduce(
        (acc, curr) => (acc.width * acc.height < curr.width * curr.height) ? [acc] : [curr]
        , {}
      ),
      video.interestingMoments.filter(moment => moment.type == 'Middle'),
      (a,b) => ({id: video.id, title: video.title, time: b.time, url: a.url})
    )
  )
)
      `,
        result: [
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
    },
    {
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
const {lists, videos} = problemData
return lists.map(category => ({
  name: category.name,
  videos: videos
    .filter(video => video.listId == category.id)
    .map(video => ({id: video.id, title: video.title}))
}))
      `,
        result: [
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
    },
    {
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
const {lists, videos, boxarts, bookmarks} = problemData
return lists.map(category => ({
    name: category.name,
    videos: videos
      .filter(video => video.listId == category.id)
      .concatMap(video =>
        Array.zip(
          bookmarks.filter(b => b.videoId == video.id).map(b => b.time),
          boxarts.filter(b => b.videoId == video.id)
            .reduce(
              (acc, curr) => (acc.width * acc.height < curr.width * curr.height) ? [acc] : [curr],
              {}
            )
            .map(b => b.url),
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
        result: [
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
  ]
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
      .concatAll()
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

function getResult (item) {
  return results[item]
}

function getResultJS (item) {
  let str = results[item]
  str = str.replace(/\n/g, '')
  str = str.replace(/\s+/g, ' ')
  const result = JSON.parse(str)
  return result
}

function getResultJSON (item) {
  return JSON.stringify(results[item])
}
