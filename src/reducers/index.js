import { combineReducers } from 'redux'
import quizList from './quizList'
import UI from './UI'

const rootReducer = combineReducers({
  quizList,
  UI
})

export default rootReducer
