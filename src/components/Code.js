import React, { Component } from 'react'
// import Playground from 'component-playground'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import compile from 'utils/compiler'
import Button from 'components/Button'

class Code extends Component {

  compileAndRun = (code, scope = {}) => {
    try {
      const compiledCode = compile(code, scope)
      return eval(compiledCode).apply(null, [scope.problemData]) // eslint-disable-line
    } catch (e) {
      return 'error'
    }
  }

  determineResult = (code, codeProps) => {
    const { currentProblem } = codeProps
    const scope = { problemData: currentProblem.data }
    const info = {
      code
    }

    const checkUserResultScript = `
/*===== START =====*/
// info object
//.......................................
const info = ${JSON.stringify(info, null, 2)}

// user script
//.......................................
const userScript = () => {
${code}
}

${currentProblem.solution.checkUserResult}

/*===== END =====*/

    `
    const resultObject = this.compileAndRun(checkUserResultScript, scope)
    codeProps.actions.setUserInfo({
      currentQuizIndex: codeProps.currentQuizIndex,
      currentProblemIndex: codeProps.currentProblemIndex,
      algorithm: code,
      result: resultObject.runResult,
      solved: resultObject.successResult
    })
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
            this.determineResult(e.target.value, this.props)
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
            this.determineResult(algorithm, this.props)
          }} />{' '}

        <Button
          title='Reset'
          onClick={() => {
            codeTextArea.value = ''
            this.determineResult('', this.props)
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
