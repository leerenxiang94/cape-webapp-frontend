import {apiEndpoint} from "../../common";

import React from 'react'

const SGFreeVsl = () => {
  const [posts, setPosts] = React.useState([]);
  
  React.useEffect(() => {

    const fetchData = async() => {
      const result = await fetch(apiEndpoint + 'SGfreeVsl');

      //whatever you receive convert to the JSON format ('axios' does this by default)
      const data = await result.json();
      // console.log('data: ', data);
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
    {posts.map(
        post => (
          <React.Fragment key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </React.Fragment>
        )
      )
    }
</div>
  )
}

export default SGFreeVsl;