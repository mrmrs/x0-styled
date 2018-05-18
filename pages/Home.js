import React from 'react'
import Div from '../elements/Div'
import H1 from '../elements/H1'

const Home = props => (
  <Div bg='blue' color='white' py={[5,6,7]} px={4}>
    <H1 fontSize={[2,3,4]}>Hello World!</H1>
  </Div>
)

export default Home
