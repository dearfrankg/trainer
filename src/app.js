import 'styles/app.pcss'
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store/configureStore'
import Root from 'components/Root'

const store = configureStore()
const app = document.getElementById('root')

render(<Root store={store} />, app)
