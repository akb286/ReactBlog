import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Posts from './components/Posts';
import PostView from './components/PostView';
import NoMatch from './components/NoMatch';

const Post = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/posts" component={FetchPosts} />
    <Route component={NoMatch} />
  </Switch>
)


export default Post;
