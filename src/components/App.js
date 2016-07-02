import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions'
import QuizCards from 'components/QuizCards'
import QuizIntro from 'components/QuizIntro'
import Select from 'components/Select'

const App = ({quizStarted, quizSelect, quizListLength, actions}) => (
  <div className='app'>
    <Select
      onChange={(index) => actions.setCurrentQuizIndex(index, quizListLength)}
      {...quizSelect} />

    {quizStarted ? <QuizCards /> : <QuizIntro />}
  </div>
)

export default connect(
  (state) => ({
    quizStarted: state.quizList[state.UI.currentQuizIndex].quizStarted,
    quizListLength: state.quizList.length,
    quizSelect: {
      title: 'quiz list: ',
      options: state.quizList.reduce((a, c) => {
        a.push(c.quizName)
        return a
      }, []),
      selected: state.UI.currentQuizIndex
    }
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)
