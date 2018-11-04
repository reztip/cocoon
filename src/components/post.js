import React from 'react'

const Post = ({ posts }) => {
  return (
    <div className="container is-fullhd">
      <div className="columns">
        {posts.map((post, idx) => (
          <div className="column" key={post.id || idx} size={12}>
            <div
              className="box"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <img
                className="image"
                src="https://placeimg.com/128/128/any"
                size={128}
                style={{ margin: '0' }}
              />
              <div style={{ width: '75%' }}>
                <div className="content">
                  <h2>{post.title}</h2>
                  <p>
                    {post.subtitle.length > 240
                      ? `${post.subtitle.slice(0, 240)}...`
                      : post.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
