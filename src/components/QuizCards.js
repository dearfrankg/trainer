import React, { Component } from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Code from 'components/Code'
import Dump from 'components/Dump'
import Text from 'components/Text'
import Select from 'components/Select'
import NavBar from 'components/NavBar'
import * as keyCodes from 'constants/keyCodes'

const renderSolved = () => (
  <div className='solved'>
    <h3>code result is correct</h3>
    <i className='ion-checkmark-circled'></i>
  </div>
)

class App extends Component {

  componentWillMount () {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    const key = e.which
    const {currentProblemIndex, problemListLength, actions} = this.props
    const keyCodesArray = [keyCodes.BACKSPACE, keyCodes.LEFT, keyCodes.RIGHT]
    if (keyCodesArray.includes(key)) {
      if (e.target.localName !== 'textarea') {
        e.preventDefault()
      }
      const handlers = {
        [keyCodes.LEFT]: () => {
          actions.setCurrentProblemIndex(currentProblemIndex - 1, problemListLength)
        },
        [keyCodes.RIGHT]: () => {
          actions.setCurrentProblemIndex(currentProblemIndex + 1, problemListLength)
        }
      }
      if (key in handlers) {
        handlers[key]()
      }
    }
  }

  render () {
    const {quizSelect, currentProblemIndex, currentProblem} = this.props
    return (
      <div className='app'>
        <Select {...quizSelect} />

        <div className='card'>
          <NavBar />

          <Text
            className='description'
            title={`Problem Number ${currentProblemIndex + 1}`}
            data={currentProblem.description} />

          <section className='code'>

            <Code />

            {currentProblem.user.solved
              ? renderSolved()
              : <Dump title='code result' data={currentProblem.user.result} />

            }

            <Dump title='correct result' data={currentProblem.solution.result} />

          </section>
        </div>

        <Dump
          title='problemData'
          data={currentProblem.data} />

      </div>
    )
  }
}

export default connect(
  (state) => ({
    quizSelect: {
      title: 'quiz list: ',
      options: state.quizList.reduce((a, c) => {
        a.push(c.quizName)
        return a
      }, []).sort(),
      selected: state.UI.currentQuizIndex
    },
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
)(App)
