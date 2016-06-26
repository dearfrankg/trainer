import * as types from 'constants/actionTypes'

const initialState = {
  currentQuizIndex: 0,
  currentProblemIndex: 0
}

const UI = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_QUIZ_INDEX:
      return {
        ...state,
        currentQuizIndex: action.currentQuizIndex
      }

    case types.SET_CURRENT_PROBLEM_INDEX:
      const inRange = (
        action.currentProblemIndex >= 0 &&
        action.currentProblemIndex <= action.problemListLength - 1
      )
      return (inRange)
        ? { ...state, currentProblemIndex: action.currentProblemIndex }
        : state

    default:
      return state
  }
}

export default UI
