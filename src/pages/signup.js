import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION_USERS = gql`
  mutation insert_users(
    $first_name: String!
    $last_name: String!
    $email: String!
    $username: String!
    $password_salt: Int!
  ) {
    insert_users(
      objects: [
        {
          first_name: $first_name
          last_name: $last_name
          email: $email
          username: $username
          password_salt: $password_salt
        }
      ]
    ) {
      affected_rows
      returning {
        first_name
      }
    }
  }
`

class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password_salt: 0,
    }
  }

  onChange(e) {
    const { target } = e
    const name = target.name

    if (name !== 'password_salt') {
      this.setState({
        [name]: target.value,
      })
    } else {
      this.setState({
        [name]: parseInt(target.value, 10),
      })
    }
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <Mutation mutation={MUTATION_USERS}>
        {(insert_users, data) => (
          <Container>
            <Form>
              <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter your last name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourname@email.com"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="myCoolUsername"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password_salt">Password</Label>
                <Input
                  type="password_salt"
                  name="password_salt"
                  id="password_salt"
                  placeholder="numbers only"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button
                onClick={e =>
                  insert_users({
                    variables: {
                      first_name: this.state.first_name,
                      last_name: this.state.last_name,
                      email: this.state.email,
                      username: this.state.username,
                      password_salt: this.state.password_salt,
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

export default SignUpPage
