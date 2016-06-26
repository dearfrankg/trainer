import React from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Code from 'components/Code'
import Dump from 'components/Dump'
import Text from 'components/Text'
import Select from 'components/Select'

const renderSolved = () => (
  <div className='solved'>
    <h3>code result</h3>
    <i className='ion-record'></i>
    <i className='ion-checkmark-circled'></i>
  </div>
)

const App = ({quizSelect, currentProblemIndex, currentProblem}) => (
  <div className='app'>
    <Select {...quizSelect} />

    <Text
      className='description'
      title={`Problem Number ${currentProblemIndex + 1}`}
      data={currentProblem.description} />

    <section className='code'>
      <div className='left'>
        <Code />
      </div>
      <div className='right'>
        {currentProblem.user.solved
          ? renderSolved()
          : <Dump title='code result' data={currentProblem.user.result} />
        }
        <Dump title='correct result' data={currentProblem.solution.result} />
      </div>
    </section>

    <Dump
      title='problemData'
      data={currentProblem.data} />

  </div>
)

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
    currentProblem:
      state.quizList[state.UI.currentQuizIndex]
        .problemList[state.UI.currentProblemIndex]
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App)
