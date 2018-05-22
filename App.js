import React from 'react'
import {
  StaticRouter,
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import { ThemeProvider } from 'glamorous' 
import  theme from './theme'

import Home from './pages/Home'
import Elements from './pages/Elements'
import Div from './elements/Div'
import Nav from './elements/Nav'
import Span from './elements/Span'

// universal router component
const Router = typeof document !== 'undefined'
  ? BrowserRouter
  : StaticRouter

const App = props => (
  <Router
    basename={props.basename}
    location={props.pathname}>
    <ThemeProvider theme={theme}>
      <Div style={{ fontFamily: theme.fontFamily.sansSerif }}>
        <Nav py={5} px={[4,5,6]}>
          <Link to='/'><Span px={3}>Home</Span></Link>
          <Link to='/elements'><Span px={3}>Elements</Span></Link>
        </Nav>
        <Route
          exact
          path='/'
          render={() => <Home {...props} />}
        />
        <Route
          exact
          path='/elements'
          render={() => <Elements {...props} />}
        />
      </Div>
    </ThemeProvider>
  </Router>
)

export default App
