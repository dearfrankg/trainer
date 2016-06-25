import React, { Component } from 'react'
import Playground from 'component-playground'
import componentExample from 'raw!../examples/es6-example'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { render } from 'react-dom'
import Tree from 'components/Tree'
import Dump from 'components/Dump'
import compile from 'utils/compiler'

class Code extends Component {

  calculateSuccess = ({correctResult, props, questionIndex, actions}, codeResult) => {
    console.log(25, codeResult, correctResult, props)
    const matchObjects = (a, b) => {
      return JSON.stringify(a) === JSON.stringify(b) // eslint-disable-line
    }
    const solved = matchObjects(codeResult, correctResult)
    return solved
  }

  runCode = (code, codeProps) => {
    const { props: questionData } = codeProps
    const scope = { questionData }
    try {
      const compiledCode = compile(code, scope)
      const runResult = eval(compiledCode).apply(null, [scope.questionData])
      const solved = this.calculateSuccess(codeProps, runResult)
      codeProps.actions.setCode(codeProps.questionIndex, code, solved, runResult)
      return runResult
    } catch (e) {
      return 'error'
    }
  }

  render = () => {
    const {questionIndex, correctResult, code, props: questionData, actions} = this.props
    return (
      <div>
        <h3>code</h3>

        <textarea onChange={(e) => {
          this.runCode(e.target.value, this.props)
        }} />

        <Playground
          className='playground'
          es6Console
          codeText={code}
          scope={{ React: React, questionData }} />

        <br />

        <button
          className='pure-button pure-button-primary'
          onClick={() => actions.setIndex(questionIndex - 1)} >Prev</button>{' '}

        <button
          className='pure-button pure-button-primary'
          onClick={() => actions.setIndex(questionIndex + 1)} >Next</button>{' '}

        <button
          className='pure-button pure-button-primary'
          onClick={() => 1} >Solve</button>{' '}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    questionIndex: state.questions.index,
    correctResult: state.questions.list[state.questions.index].correctResult,
    code: state.questions.list[state.questions.index].code,
    props: state.questions.list[state.questions.index].props
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Code)
