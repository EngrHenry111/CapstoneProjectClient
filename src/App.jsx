import './app.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import { Topbar } from './component/topbar/topbar';
import { Home } from './pages/home/home';
import { Single } from './pages/single/single';
import { Write } from './pages/write/write';
import { Settings } from './pages/settings/settings';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';


function App() {
  const [user, setUser] = useState(() => {
  try  {
    const savedUser = localStorage.getItem("user");
    if(!savedUser || savedUser === "undefined") return null;
    return JSON.parse(savedUser);
    }catch (error){
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  });

  return (
    <Router>
      <Topbar user={user} setUser = {setUser} />
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home/>} />
            <Route path="/write" element={<Write />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/single/:postId" element={<Single />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
  
    </Router>
  );
}



export default App;


// const [user, setUser] = useState(() => {
//   const savedUser = localStorage.getItem("user");
//   return savedUser ? JSON.parse(savedUser) : null;