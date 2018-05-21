# X0 Styled

### What is this?

Starter template for prototyping a static site with x0, glamorous, and styled-system. 
This might be helpful for people who know css and html but are unfamiliar with React. 
It also might be useful for people know react and don't know html and css. 
It also might not be useful for anyone but myself.

As this project uses css-in-js, all css is inlined to the head.

This project is currently in-flux so there might be lots of breaking changes.
There also might not be.


### Getting Started

After downloading the directory and navigating to it in your terminal run
```
npm install && npm run dev
```
Then open your browser to localhost:8000

You can edit pages/Home.js and you should see those adjustments update live in the browser. 

### Adding a new page

Fist add a new page in the pages directory. You can copy Home.js and rename it to something else like Example.js

In App.js you'll want to import a new component at the top of the page. (A page is still a component)
App.js is currently importing Home and Elements pages by default. Here we add an Example page (Example could be changed to any string)

```
// 
import Home from './pages/Home'
import Elements from './pages/Elements'
import Example from './pages/Example'
```

Then you will need to add a new Route within the Router component. 
We currently have routes to Home and Elements by default. You'll want to add new Route component 

```
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
  <Route
    exact
    path='/example'
    render={() => <Example {...props} />}
  />
```
