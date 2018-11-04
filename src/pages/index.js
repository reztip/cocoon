import React from 'react'

import Layout from '../components/layout'
import Post from '../components/post'

import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = ({ data }) => (
  <Layout>
    <Post posts={data.cocoon.Post} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    cocoon {
      Post {
        title
        subtitle
        add_date
        user
        media_id
      }
    }
  }
`
