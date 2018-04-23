import React from 'react'
import {
  StaticRouter,
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import { ThemeProvider } from 'glamorous' 
import  theme from './theme'

import Home from './Home'
import Components from './Components'
import Div from './components/Div'
import Nav from './components/Nav'
import Span from './components/Span'

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
        <style dangerouslySetInnerHTML={{
            __html: 'body{ padding: 0;margin:0;'
          }} />
        <Nav py={3}>
          <Link to='/'><Span px={3}>Home</Span></Link>
          <Link to='/components'><Span px={3}>Components</Span></Link>
        </Nav>
        <Route
          exact
          path='/'
          render={() => <Home {...props} />}
        />
        <Route
          exact
          path='/components'
          render={() => <Components {...props} />}
        />
      </Div>
    </ThemeProvider>
  </Router>
)

export default App
