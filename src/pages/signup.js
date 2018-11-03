import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
      password: '',
    }
  }

  onChange(e) {
    const { target } = e
    const name = target.name
    this.setState({
      [name]: target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    fetch('https://cocoon-app.herokuapp.com/v1alpha1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: {
          users: {
            first_name: 'billy',
          },
        },
      }),
    })
      .then(r => console.log(r))
      .then(data => console.log('data returned:', data))
      .catch(err => console.log('Error', err))
  }

  render() {
    return (
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
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={this.onChange}
            />
          </FormGroup>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default SignUpPage
