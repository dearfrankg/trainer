import * as types from 'constants/actionTypes'

export const setCodeResult = (index, codeResult) => ({
  type: types.SET_CODE_RESULT, index, codeResult
})

export const setIndex = (index) => ({
  type: types.SET_INDEX, index
})
