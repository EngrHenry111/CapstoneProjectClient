

import { useEffect, useState } from 'react'
import './post.css'
import axios from 'axios'

export const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://capstoneprojectserver-1.onrender.com/posts/allPost")
     
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (postId) => {
    try {
     
   await axios.delete(`https://capstoneprojectserver-1.onrender.com/posts/deletePost/${postId}`);


      setPosts(posts.filter(post => post._id !== postId)); // update UI
      alert("Post deleted!");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete post.");
    }
  };

  return (
    <div  >
      {posts?.map(post => (
        <div className='post' key={post?._id}>
          {post?.imageUrl && (
            <img className='postImg' src={post.imageUrl} alt="Post" />
          )}
          <div className="postInfo">
            {/* <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
            </div> */}
            <span className="postTitle">{post?.title}</span>
            <hr />
            <span className="postTitle">{post?.subtitle}</span>
            <hr />
           
          </div>
          <p className='postDes'>
            {post?.content?.substring(0, 300)}
          </p>

           <span className="postDate">
              {new Date(post?.createdAt).toDateString()}
            </span>

             <button
            className="deleteButton"
            onClick={() => handleDelete(post._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};




