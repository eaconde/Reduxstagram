import React from 'react';
import {render} from 'react-dom';

// import stylesheets
import css from './styles/style.styl';

// import components
import App from './components/App';
import Photo from './components/Photo';
import PhotoGrid from './components/PhotoGrid';

// import router 
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/photos/:id" component={Photo}></Route>
      </Route>
    </Router>
  </Provider>
  
)

render(router, document.getElementById('root'));