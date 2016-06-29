import React from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const QuizIntro = ({introHtml}) => {
  console.log(introHtml)
  return (
    <div className='card'>
      <div
        ref={(node) => { node.innerHTML = introHtml }}
        className='intro' />
    </div>
  )
}

export default connect(
  (state) => ({
    introHtml: state.quizList[state.UI.currentQuizIndex].quizIntro
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(QuizIntro)
