import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION_COMMENTS = gql`
mutation insert_Post(
  $title: String!
  $subtitle: String!
  $add_date: timestamptz
  $media_id: Int!
  $user: String!
) {
  insert_Post(
    objects: [
      {
        title: $title
        subtitle: $subtitle
        add_date: $add_date
        media_id: $media_id
        user: $user
      }
    ]
  ) {
    affected_rows
    returning {
      title
      subtitle
    }
  }
}
`
class CommentsPage extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      title: '',
      subtitle: '',
    }
  }

  onChange(e) {
    const { target } = e
    const name = target.name

    if (name !== '') {
      this.setState({
        [name]: target.value,
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <Mutation mutation={MUTATION_COMMENTS}>
        {(insert_Post, data) => (
          <Container>
            <Form>
              <FormGroup>
                <Label for="title">Post title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter a title for your post"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>

                <Label for="subtitle">Comment</Label>
                <br />
                <textarea
                  type="text"
                  rows="2"
                  cols="50"
                  name="subtitle"
                  id="subtitle"
                  placeholder="Type Something"
                  onChange={this.onChange}
                />
              </FormGroup>

              <Button
                onClick={e =>
                  insert_Post({
                    variables: {
                      title: this.state.title,
                      subtitle: this.state.subtitle,
                      add_date: new Date(),
                      user: "a",
                      media_id: 123,

                    },
                  })
                }
              >
                Submit
              </Button>
            </Form>
          </Container>
        )}
      </Mutation>
    )
  }
}

export default CommentsPage
