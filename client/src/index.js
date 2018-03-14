import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import blog from './blog';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider blog={blog}>
    <BrowserRouter>
      <Post />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();import ReactDOM from 'react-dom';
// import './index.css';
// import Post from './Post';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Post />, document.getElementById('root'));
registerServiceWorker();
