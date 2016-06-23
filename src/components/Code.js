import React, { Component } from 'react'
import Playground from 'component-playground'
import componentExample from 'raw!../examples/es6-example'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Code extends Component {

  constructor () {
    super()
    this.state = {
      processCalled: false
    }
  }

  process = (code) => {
    const matchObjects = (a, b) => {
      return JSON.stringify(a) === JSON.stringify(b) // eslint-disable-line
    }
    const {questionIndex, correctResult, props, actions} = this.props
    if (!this.state.processCalled) {
      this.state.processCalled = true
      return
    }
    const codeResult = code(props)
    console.log(44, codeResult)
    // actions.setCodeResult(questionIndex, codeResult)
    const result = matchObjects(codeResult, correctResult)
      ? 'SUCCESS'
      : 'FAILURE'
    console.log(result, codeResult)
  }

  render () {
    const {questionIndex, correctResult, props, actions} = this.props

    return (
      <div>
        <h3>code</h3>
        <Playground
          className='playground'
          es6Console
          codeText={componentExample}
          scope={{ React: React, process: this.process }} />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    questionIndex: state.questions.index,
    correctResult: state.questions.list[state.questions.index].correctResult,
    props: state.questions.list[state.questions.index].props
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Code)
