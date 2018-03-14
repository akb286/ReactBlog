import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs } from '../actions/blogs';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Blogs extends React.Component {
  {
    this.props.dispatch(getBlogs())
  }

  blogs = () => {
    return this.props.blogs.map( blog =>
      <Card key={blog.id}>
        <Image src={blog.logo} />
        <Card.Content>
          <Card.Header>
            {blog.name}
          </Card.Header>
          <Card.Meta>
            <span>
              {blog.author}
            </span>
          </Card.Meta>
          <Card.Description>
            {blog.category}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/blogs/${blog.id}`}>
            View Blog
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Blog</Header>
          <Card.Group itemsPerRow={4}>
           { this.blogs() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { blogs: state.blogs }
  }

export default connect(mapStateToProps)(Blogs);
