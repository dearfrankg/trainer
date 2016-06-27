import React from 'react'
import * as actions from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const NavBar = ({problemStatusList, problemListLength, currentProblemIndex, actions}) => (
  <div className='navbar'>
    {problemStatusList.map((status, i) => (
      <span key={i}>
        <i
          className='ion-record'
          style={{
            color: (status.solved) ? 'green'
              : (status.hasCode) ? 'crimson'
              : 'silver',
            borderBottom: (currentProblemIndex === i) ? '1px solid black' : 'none'
          }}
          onClick={() => actions.setCurrentProblemIndex(i, problemListLength)}
          ></i>
          {' '}
      </span>
    ))}
  </div>
)

export default connect(
  (state) => ({
    problemStatusList:
      state.quizList[state.UI.currentQuizIndex].problemList
        .reduce((a, c) => {
          a.push({solved: c.user.solved, hasCode: c.user.algorithm.length})
          return a
        }, []),
    problemListLength:
      state.quizList[state.UI.currentQuizIndex]
        .problemList.length,
    currentProblemIndex: state.UI.currentProblemIndex
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(NavBar)
