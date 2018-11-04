import React from 'react'
import {
  Box,
  Container,
  Columns,
  Image,
  Content,
} from 'react-bulma-components/full'

const Post = ({ posts }) => {
  return (
    <Container breakpoint="fullhd">
      <Columns>
        {posts.map((post, idx) => (
          <Columns.Column key={post.id || idx} size={12}>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Image
                src="https://placeimg.com/128/128/any"
                size={128}
                style={{ margin: '0' }}
              />
              <div style={{ width: '75%' }}>
                <Content>
                  <h2>{post.title}</h2>
                  <p>
                    {post.subtitle.length > 240
                      ? `${post.subtitle.slice(0, 240)}...`
                      : post.subtitle}
                  </p>
                </Content>
              </div>
            </Box>
          </Columns.Column>
        ))}
      </Columns>
    </Container>
  )
}

export default Post
