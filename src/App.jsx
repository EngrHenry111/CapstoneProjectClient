

import { useState, useEffect } from 'react'
import { Topbar } from './component/topbar/topbar'
import {Home} from './pages/home/home'
import { Single } from './pages/single/single'
import { Write } from './pages/write/write'
import { Settings } from './pages/write/settings/settings'
import { Login } from './pages/login/login'
import { Register } from './pages/register/register'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SinglePost } from './component/singlePost/singlePost'
import { Post } from './component/post/post'


  
  function App() {
  //   const [user, setUser] = useState(null);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     // Check if user data exists in localStorage (or could be fetched from API)
  //     const storedUser = JSON.parse(localStorage.getItem('user'));
  
  //     if (storedUser) {
  //       setUser(storedUser); // Set the user if found in localStorage
  //     }
  //   }, []);
  
    // // Example for dynamic navigation
    // const handleNavigate = () => {
    //   if (user) {
    //     navigate(`/upload/${user._id}`); // Navigate to dynamic user route
    //   } else {
    //     navigate('/login'); // If user is not logged in, redirect to login page
    //   }
    // };

   const user =false;
  return (
   
   
    <Router>
    <Topbar />



    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    
    <Routes>
      <Route path="/register" element=
      {user ? <Home/>:<Register />} />
    </Routes>

    <Routes>
      <Route path="/login" element={ user? <Home/> :<Login />} />
    </Routes>

    <Routes>
      <Route path="/write" element={user? <Write/>:<Register />} />
    </Routes>

    <Routes>
      <Route path="/settings" element={user? <Settings/>:<Register />} />
    </Routes>

    <Routes>
      <Route path="/post/:postId" element={<Single />} />
    </Routes>

   
  </Router>
  )
}

export default App
