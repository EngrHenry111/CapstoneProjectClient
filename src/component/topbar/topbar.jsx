import React from 'react'
import  './topbar.css'
import { Link, useNavigate } from 'react-router-dom';


export const Topbar = ({user, setUser}) => {
  const navigate = useNavigate();

  const handleLogout = ()=> {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login"); 
    //navigate("/register");
  }

 
  return (
    <div className='top'>
      <div className="top_l">
        <i id='face' class="topIcon  fa-brands fa-facebook"></i>
        <i id='wats'  class="topIcon fa-brands fa-whatsapp"></i>
        <i id='twit'  class="topIcon fa-brands fa-twitter"></i>
        <i id='insta'  class="topIcon fa-brands fa-instagram"></i>
     </div> 

     <div className="top_c">
        <ul className='topList'>

        <li className='topListItem'>
       <Link className='link' to='/home'> HOME </Link>
        </li>

          <li className= 'topListItem'>
        <Link className= 'link' to='/write'> WRITE </Link>
          </li>

          <li className =  'topListItem'>
        <Link className = 'link' to='/settings'> UPDATE </Link>
          </li> 

           
          <li className = 'topListItem' onClick={handleLogout} >
          {user ? "LOGOUT": ""} 
          </li>

        </ul>
      </div> 
    
    

      <div className="top_r">
        {
          user ? (
            <img className='topImage' 
            src = "/images/image.jpg" alt="" />
          ) :
             (
            <ul className='topList'>
             <li className='topListItem'> 
              <Link className='link' to='/login'> 
              LOGIN
              </Link>
              </li>
             
              <li className='topListItem'> 
              <Link className='link' to='/register'> 
              REGISTER
              </Link>
              </li>
           
            </ul>

         )
        }
       
        <i  className="topSeachIcon  fa-solid fa-magnifying-glass"></i>
      </div>      
    </div>
  )
}



