export default {
  quizName: 'seven functions',
  problemList: [
    {
      description: 'Traverse names using forEach to return an array of names.',
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
const {names} = problemData
const result = []
names.forEach((name) => result.push(name))
return result
        `,
        result: [ 'one', 'two', 'three' ]
      }
    },
    {
      description: 'Project a collection containing id and title using map.',
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
const {newReleases} = problemData
return newReleases.map((movie) => ({ id: movie.id, title: movie.title }))
        `,
        result: [
          { id: 70111470, title: 'Die Hard' },
          { id: 654356453, title: 'Bad Boys' },
          { id: 65432445, title: 'The Chamber' },
          { id: 675465, title: 'Fracture' }
        ]
      }
    },
    {
      description: 'Capture videos with 5.0 rating using filter.',
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
const {newReleases} = problemData
return newReleases.filter((movie) => movie.rating == 5.0)
        `,
        result: [
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
    },
    {
      description: 'Capture id of videos with 5.0 rating using chain of filter and map.',
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
const {newReleases} = problemData
return newReleases
  .filter(movie => movie.rating == 5.0)
  .map(movie => movie.id)
        `,
        result: [ 654356453, 675465 ]
      }
    },
    {
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
const {movieLists} = problemData
return movieLists
  .reduce((acc, category) => {
    category.videos.forEach(movie => acc.push(movie.id))
    return acc
  }, [])
        `,
        result: [ 70111470, 654356453, 65432445, 675465 ]
      }
    },
    {
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
const {movieLists} = problemData
return movieLists
  .map(category => category.videos.map(video => video.id))
  .concatAll()
        `,
        result: [ 70111470, 654356453, 65432445, 675465 ]
      }
    },






  ]
}

/**

{
  title: 'Flatten the movieLists array into an array of video ids using map and concatAll',
  code: () => {
    const data = movieLists()
    return data
      .map(category => category.videos.map(video => video.id))
      .concatAll()
  },
  correctResult: [ 70111470, 654356453, 65432445, 675465 ]
},

**/

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

function powerBoxart () {
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

!(function setupArrayMethods () {
  Array.prototype.concatAll = function () { //eslint-disable-line
    return this.reduce((acc, curr, i) => {
      curr.forEach((item) => acc.push(item))
      return acc
    }, [])
  }
})()
