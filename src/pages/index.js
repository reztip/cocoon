import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <h2>Post something</h2>

    <div>
      <form action="">
      <textarea rows="2" cols="50" name="usrtxt" wrap="hard">
      Type your comment
      </textarea>
      <br/>
      <input type="submit" />
    </form>

    <h4>Contact Us</h4>
    <form
      name = "contact"
      method ="post"
      data-netifly="true"
      data-netifly-honeypot="bot-field">
      <input name = "name" placeholder ="type something" type="text"/>
      <button>Send</button>
      </form>
    </div>



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
