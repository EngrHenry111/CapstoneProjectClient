// import { useEffect, useState } from "react";
// import { Post } from "../post/post";
// import axios from "axios";
// import "./posts.css";

// export const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get("https://capstoneprojectserver-1.onrender.com/posts/allPost")
//       .then((response) => {
//         setPosts(response.data); // response.data should be an array of posts
//       })
//       .catch((error) => console.error(error));
    
//   }, []);

//   return (
//     <div className="posts">
//       {posts.map((post) => (
//         <Post key={post._id} post={post} />
//       ))}
//     </div>
//   );
// };






import { Post } from '../post/post'
import './posts.css'

export const Posts = () => {
  return (
    <div className = 'posts'>
              
       <Post/> 
       
      
    </div>
  )
}
