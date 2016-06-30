import React, { Component } from 'react'
// import Playground from 'component-playground'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import compile from 'utils/compiler'
import Button from 'components/Button'

class Code extends Component {

  calculateSuccess = (correctResult, userResult) => {
    return JSON.stringify(correctResult) === JSON.stringify(userResult)
  }

  runCode = (code, codeProps) => {
    const { currentProblem } = codeProps
    const scope = { problemData: currentProblem.data }
    let runResult
    try {
      const compiledCode = compile(code, scope)
      runResult = eval(compiledCode).apply(null, [scope.problemData]) // eslint-disable-line
    } catch (e) {
      runResult = 'error'
    } finally {
      codeProps.actions.setUserInfo({
        currentQuizIndex: codeProps.currentQuizIndex,
        currentProblemIndex: codeProps.currentProblemIndex,
        algorithm: code,
        result: runResult,
        solved: this.calculateSuccess(currentProblem.solution.result, runResult)
      })
    }
  }

  render = () => {
    let codeTextArea
    const {currentProblemIndex, problemListLength, currentProblem, actions} = this.props
    return (
      <div className='code'>
        <textarea
          value={currentProblem.user.algorithm}
          disabled={currentProblem.user.solved}
          ref={(node) => { codeTextArea = node }}
          onChange={(e) => {
            this.runCode(e.target.value, this.props)
          }} />

        <Button
          title='Prev'
          onClick={() =>
            actions.setCurrentProblemIndex(currentProblemIndex - 1, problemListLength)
          } />{' '}

        <Button
          title='Next'
          onClick={() =>
            actions.setCurrentProblemIndex(currentProblemIndex + 1, problemListLength)
          } />{' '}

        <Button
          title='Solve'
          onClick={() => {
            const algorithm = currentProblem.solution.algorithm
            codeTextArea.value = algorithm
            this.runCode(algorithm, this.props)
          }} />{' '}

        <Button
          title='Reset'
          onClick={() => {
            codeTextArea.value = ''
            this.runCode('', this.props)
          }} />{' '}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    currentQuizIndex: state.UI.currentQuizIndex,
    currentProblemIndex: state.UI.currentProblemIndex,
    problemListLength:
      state.quizList[state.UI.currentQuizIndex]
        .problemList.length,
    currentProblem:
      state.quizList[state.UI.currentQuizIndex]
        .problemList[state.UI.currentProblemIndex]
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Code)

/**

<Playground
  className='playground'
  es6Console
  codeText={code}
  scope={{ React: React, questionData }} />

**/
