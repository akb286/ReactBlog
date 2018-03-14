import React from 'react';
import { connect } from 'react-redux'
import { updatePost, addPost } from '../actions/posts'
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialState = {
    description: '',
    category: '',
    author: ''
  }

  state = {...this.initialState}

  componentWillMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
    closeForm()
  }

  render() {
    const { name, description, category, version, price, author } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="description"
          defaultValue={description}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Input
          name="category"
          defaultValue={category}
          onChange={this.handleChange}
          label="Category"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);
