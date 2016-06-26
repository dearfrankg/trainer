import * as types from 'constants/actionTypes'
import initialState from '../quizList'

/**
        quizList = [
          {
            quizName: 'xxx',
            problemList: [
              {
                description: 'do something to return an array of [1,2,3]',
                data: {
                  movielist: movieLists2(),
                  videos: ['one', 'two', 'three'],
                  bookmarks: ['x', 'y', 'z']
                },
                user: {
                  algorithm: '',
                  result: '',
                  solved: false
                },
                solution: {
                  algorithm: '',
                  result: [1, 2, 3]
                }
              }...
            ]
          }
          ...
        ]
**/

const problem = (state = {}, action) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      return {
        ...state,
        user: {
          algorithm: action.algorithm,
          result: action.result,
          solved: action.solved
        }
      }

    default:
      return state
  }
}

const quizList = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      return [
        ...state.slice(0, action.currentQuizIndex),
        {
          ...state[action.currentQuizIndex],
          problemList: [
            ...state[action.currentQuizIndex].problemList.slice(0, action.currentProblemIndex),
            problem(
              state[action.currentQuizIndex].problemList[action.currentProblemIndex],
              action
            ),
            ...state[action.currentQuizIndex].problemList.slice(action.currentProblemIndex + 1)
          ]
        },
        ...state.slice(action.currentQuizIndex + 1)
      ]

    default:
      return state
  }
}

export default quizList
