import React from 'react'
import Div from './components/Div'
import H1 from './components/H1'

const Home = props => (
  <Div bg='blue' color='white' py={5} px={4}>
    <H1 fontSize={[2,3,4]}>Hello World!</H1>
  </Div>
)

export default Home
