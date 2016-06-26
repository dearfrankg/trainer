import * as types from 'constants/actionTypes'

export const setCurrentQuizIndex = (currentQuizIndex, quizListLength) => ({
  type: types.SET_CURRENT_QUIZ_INDEX, currentQuizIndex, quizListLength
})

export const setCurrentProblemIndex = (currentProblemIndex, problemListLength) => ({
  type: types.SET_CURRENT_PROBLEM_INDEX, currentProblemIndex, problemListLength
})

export const setUserInfo = (payload) => ({
  type: types.SET_USER_INFO, ...payload
})
