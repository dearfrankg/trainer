import React from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const QuizIntro = ({currentQuizIndex, introHtml, actions}) => {
  return (
    <div className='card'>
      <div
        ref={(node) => {
          if (node) {
            node.innerHTML = introHtml
          }
        }}
        className='intro' />
      <div className='button-container'>
        <button
          onClick={() => { actions.setQuizStarted(true, currentQuizIndex) }}
          className='pure-button pure-button-primary'
          >Start Quiz</button>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    introHtml: state.quizList[state.UI.currentQuizIndex].quizIntro,
    currentQuizIndex: state.UI.currentQuizIndex
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(QuizIntro)
