import * as React from 'react';
import axios from 'axios';
import Posts from 'components/Posts';

const PostContainer = () => {
  const [ posts, setPosts ] = React.useState(null);

  async function getPosts() {
    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
      const { data } = response;
      setPosts(data);
    } catch (e) {
      console.warn(e.toString());
    }
  }

  function getPostsDefault() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        const { data } = response;
        setPosts(data);
      })
      .catch((e) => {
        console.warn(e.toString());
      });
  }

  return (
    <div>
      <Posts data={posts}/>
      <button onClick={getPosts}>get posts</button>
      <button onClick={getPostsDefault}>get posts default</button>
    </div>
  );
};

export default PostContainer;
