import React from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Code from 'components/Code'
import { ObjectTree } from '../vendor/react-object-tree/lib/scripts'

const renderDump = (title, data) => (
  <div>
    <h3>{title}</h3>
    <div className='dump'><pre>{JSON.stringify(data, null, 2)}</pre></div>
  </div>
)

const renderText = (title, data) => (
  <div className='text'>
    <h3>{title}</h3>
    <div>{data}</div>
  </div>
)

const renderObjectTree = (title, data) => (
  <div className='object'>
    <h3>{title}</h3>
    <ObjectTree value={data} level={1} />
  </div>
)

const App = ({question, questionIndex, actions}) => (
  <div>
    <nav>
      <button
        className='pure-button'
        onClick={() => actions.setIndex(questionIndex + 1)} >Next</button>
    </nav>

    <div className='app-container'>
      <section className='left'>
        {renderText('instructions', question.prompt)}
        <Code />
        {renderObjectTree('props', question.props)}
      </section>

      <section className='right'>
        {renderDump('correct result', question.correctResult)}
        {renderDump('code result', question.codeResult)}
      </section>
    </div>
  </div>
)

export default connect(
  (state) => ({
    question: state.questions.list[state.questions.index],
    questionIndex: 0
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)
