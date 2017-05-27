import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// reducer base
import rootReducer from './reducers/index';

// default data
import comments from './data/comments';
import posts from './data/posts';

// NOTE use ES2016 { posts } instead of { posts: posts }
const defaultState = { posts, comments }

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;