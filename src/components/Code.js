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

  constructor () {
    super()
    this.state = {
      codeResult: '<<<<HELLO>>>>'
    }
  }

  setCodeResult = (codeResult) => {
    this.setState({codeResult: codeResult})
    console.log(22, this.state.codeResult)
  }

  // process = (editorCodeFn) => {
  //   const matchObjects = (a, b) => {
  //     return JSON.stringify(a) === JSON.stringify(b) // eslint-disable-line
  //   }
  //   const {correctResult, props} = this.props
  //   const codeResult = editorCodeFn(props)
  //   // this.setCodeResult(codeResult)
  //   console.log(codeResult, correctResult)
  //   const result = matchObjects(codeResult, correctResult)
  //     ? 'SUCCESS'
  //     : 'FAILURE'
  //   console.log(result, codeResult)
  // }

  calculateSuccess = ({codeResult, correctResult, props}) => {
    const matchObjects = (a, b) => {
      return JSON.stringify(a) === JSON.stringify(b) // eslint-disable-line
    }
    const isCorrectResult = matchObjects(codeResult, correctResult)
    console.log('isCorrectResult', isCorrectResult)
    actions.setSuccess(props.questionIndex, isCorrectResult)
  }

  runCode = (code, props, scope = {}) => {
    try {
      const compiledCode = compile(code, scope)
      const runResult = eval(compiledCode).apply(null, scope)
      this.calculateSuccess(props)
      actions.setCode(props.questionIndex, code)
      return runResult
    } catch (e) {
      return 'error'
    }
  }

  render = () => {
    const {questionIndex, correctResult, code, props, actions} = this.props
    const editorData = props

    return (
      <div>
        <h3>code</h3>

        <textarea onChange={(e) => {
          this.runCode(e.target.value, editorData)
        }} />

        <Playground
          className='playground'
          es6Console
          codeText={code}
          scope={{ React: React, editorData }} />

        <div id='stuff' />

        <Dump title='result' data={this.state.codeResult} />
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
