import * as types from 'constants/actionTypes'

export const setCode = (index, code, solved, runResult) => ({
  type: types.SET_CODE, index, code, solved, runResult
})

export const setIndex = (index) => ({
  type: types.SET_INDEX, index
})
