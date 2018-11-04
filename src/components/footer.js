import React from 'react'
import { Link } from 'gatsby'

import { Footer, Container, Content } from 'react-bulma-components/full';

const ContactFooter = data => (
  <Footer style={{backgroundColor: '#ffffff'}} >
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <h3>Say Hi</h3>
              <form method="POST" action="https://formspree.io/mandy.n.trinh@gmail.com" method="POST">
                <input type="email" name="email" placeholder="Your email" />
                <input type="name" name="name" placeholder="Your name" />
                <input type="name" name="comment" placeholder="Question/Comment" />
                <button type="submit" value="send">Send!</button>
              </form>
            </p>
          </Content>
        </Container>
      </Footer>
);

export default ContactFooter;
