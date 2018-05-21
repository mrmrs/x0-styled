import React from 'react'
import { containerWidth } from './theme'

import Div from './Div'
const Container = ({innerBg, ...props}) => {

  return (
    <Div {...props}>
      <Div mx='auto' px={4} maxWidth={containerWidth} innerBg={innerBg}>
        {props.children}         
      </Div>
    </Div>
  )
}

export default Container

