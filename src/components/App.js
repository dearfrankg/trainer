import React from 'react'
import { connect } from 'react-redux'
import QuizCards from 'components/QuizCards'
import QuizIntro from 'components/QuizIntro'
import Select from 'components/Select'

const App = ({quizStarted, quizSelect}) => (
  <div className='app'>
    <Select {...quizSelect} />
    {quizStarted
      ? <QuizCards />
      : <QuizIntro />
    }
  </div>
)

export default connect(
  (state) => ({
    quizStarted: state.quizList[state.UI.currentQuizIndex].quizStarted,
    quizSelect: {
      title: 'quiz list: ',
      options: state.quizList.reduce((a, c) => {
        a.push(c.quizName)
        return a
      }, []).sort(),
      selected: state.UI.currentQuizIndex
    }
  })
)(App)
