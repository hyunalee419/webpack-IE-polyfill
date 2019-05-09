import * as React from 'react';
import axios from 'axios';
import Posts from 'components/Posts';

const PostContainer = () => {
  const [ posts, setPosts ] = React.useState(null);

  async function getPosts() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const { data } = response;
      setPosts(data);
    } catch (e) {
      console.warn(e.toString());
    }
  }

  return (
    <div>
      <Posts data={posts}/>
      <button onClick={getPosts}>get posts</button>
    </div>
  );
};

export default PostContainer;
