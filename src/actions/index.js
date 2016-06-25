import * as types from 'constants/actionTypes'

export const setCode = (index, code) => ({
  type: types.SET_CODE, index, code
})

export const setIndex = (index) => ({
  type: types.SET_INDEX, index
})
