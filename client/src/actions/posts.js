import axios from 'axios';

export const getPosts = (cb) => {
  return (dispatch) => {
    axios.get('/api/posts')
      .then( res => dispatch({ type: 'APPS', posts: res.data }) )
  }
}

export const addPost = (post) => {
  return (dispatch) => {
    axios.post('/api/posts', { post } )
     .then( res => dispatch({ type: 'ADD_APP', post: res.data }) )
  }
}

export const updatePost = (post) => {
  return (dispatch) => {
    axios.put(`/api/posts/${post.id}`, { post } )
      .then( res => dispatch({ type: 'UPDATE_APP', post: res.data }) )
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
    axios.delete(`/api/posts/${id}`)
      .then( () => dispatch({ type: 'DELETE_APP', id }) )
  }
}
