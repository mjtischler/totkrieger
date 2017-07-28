import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import EncounterHandler from './EncounterHandler'

let reactElement = document.getElementById('react')

render(
  <Provider store={store}>
    <EncounterHandler />
  </Provider>,
    reactElement
)
