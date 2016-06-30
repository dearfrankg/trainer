import React from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from 'components/Button'

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
        <Button
          onClick={() => { actions.setQuizStarted(true, currentQuizIndex) }}
          title='Start Quiz'
        />
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
