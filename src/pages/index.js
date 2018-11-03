import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    {data.cocoon.users.map(user => (
      <>
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <p>email: {user.email}</p>
      </>
    ))}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    cocoon {
      users {
        id
        first_name
        last_name
        email
      }
    }
  }
`
