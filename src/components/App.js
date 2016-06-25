import React from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Code from 'components/Code'
import Dump from 'components/Dump'
import Text from 'components/Text'

const App = ({question, questionIndex, actions}) => (
  <div>
    <div className='app-container'>
      <section className='left'>
        <Text title='index' data={questionIndex} />
        <Text title='instructions' data={question.prompt} />
        <Code />
      </section>

      <section className='right'>
        <Dump title='correct result' data={question.correctResult} />
        <Dump title='code result' data={question.codeResult} />
      </section>
    </div>
  </div>
)

export default connect(
  (state) => ({
    question: state.questions.list[state.questions.index],
    questionIndex: state.questions.index
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)
