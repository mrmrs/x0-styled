import React from 'react'
import Div from './components/Div'
import H1 from './components/H1'

const Home = props => (
  <Div bg='red' py={5} px={4}>
    <H1 fontSize={[2,3,4]}>This is a home page</H1>
  </Div>
)

export default Home
