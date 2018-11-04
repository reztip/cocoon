import React from 'react'

const ContactFooter = data => (
  <footer style={{ backgroundColor: '#ffffff' }}>
    <div className="container">
      <div className="content" style={{ textAlign: 'center' }}>
        <h3>Say Hi</h3>
        <form
          method="POST"
          action="https://formspree.io/mandy.n.trinh@gmail.com"
          method="POST"
        >
          <input type="email" name="email" placeholder="Your email" />
          <input type="name" name="name" placeholder="Your name" />
          <input type="name" name="comment" placeholder="Question/Comment" />
          <button type="submit" value="send">
            Send!
          </button>
        </form>
      </div>
    </div>
  </footer>
)

export default ContactFooter
