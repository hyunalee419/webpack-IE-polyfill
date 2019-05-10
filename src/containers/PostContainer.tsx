import * as React from 'react';
import Posts from 'components/Posts';

const PostContainer = () => {
  const [ posts, setPosts ] = React.useState(null);

  async function getPosts() {
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/todos');

      response.json().then((result) => {
        setPosts(result);
      });
    } catch (e) {
      console.warn(e.toString());
    }
  }

  function getPostsDefault() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        console.log(response)
        response.json().then((result) => {
          setPosts(result);
        });
      })
      .catch((e) => {
        console.warn(e.toString());
      });
  }

  return (
    <div>
      <Posts data={posts}/>
      <button onClick={getPosts}>get posts (fetch, http)</button>
      <button onClick={getPostsDefault}>get posts default (fetch, https)</button>
    </div>
  );
};

export default PostContainer;