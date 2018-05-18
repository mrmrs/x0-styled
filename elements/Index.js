import React from 'react'
import {
  Library,
  Example
} from '@compositor/kit'

import H1 from './H1'
import Div from './Div'

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
