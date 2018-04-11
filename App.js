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

// universal router component
const Router = typeof document !== 'undefined'
  ? BrowserRouter
  : StaticRouter

const App = props => (
  <Router
    basename={props.basename}
    location={props.pathname}>
    <ThemeProvider theme={theme}>
      <div>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <Route
          exact
          path='/'
          render={() => <Home {...props} />}
        />
      </div>
    </ThemeProvider>
  </Router>
)

export default App
