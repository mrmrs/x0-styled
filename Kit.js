import React from 'react'
import {
  Library,
  Example
} from '@compositor/kit'

import H1 from './components/H1'
import Div from './components/Div'

const App = props => (
  <Library>
    <Example name='H1'>
      <H1>Hello</H1>
    </Example>
    <Example name='Div'>
      <Div>Hello</Div>
    </Example>
  </Library>
)

export default App
