/*
* Npm import
*/
import React from 'react';
import PropTypes from 'prop-types';
/*
* local import
*/
import Post from 'src/components/Post';
/*
* Code
*/
const Posts = ({ posts }) => (
  <main id="posts">
    {posts.map(post => (
      <Post key={post.id} {...post} />
     ))}

  </main>
);
Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
/*
* Export
*/
export default Posts;
