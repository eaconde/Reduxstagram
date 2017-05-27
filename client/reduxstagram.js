import React from 'react';
import {render} from 'react-dom';

// import stylesheets
import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Photo from './components/Photo';
import PhotoGrid from './components/PhotoGrid';

// import router 
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/photos/:id" component={Photo}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));