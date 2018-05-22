import React from 'react'
import Div from '../elements/Div'
import H1 from '../elements/H1'
import P from '../elements/P'

const Index = props => (
  <Div bg='blue.5' py={[5,6,7]} px={[4,5,6]}>
    <H1 fontSize={[2,4,6]} color='white.0'>X0 Styled</H1>
    <P fontSize={3} color='white.0'>Setup for designing and building static sites with x0, glamorous, and react.</P>
  </Div>
)

export default Index
