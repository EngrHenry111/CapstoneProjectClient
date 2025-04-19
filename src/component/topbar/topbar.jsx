import React from 'react'
import  './topbar.css'
import { Link } from 'react-router-dom';


export const Topbar = () => {

  const user = false;
  return (
    <div className='top'>
      <div className="top_l">
        <i class="topIcon fa-brands fa-facebook"></i>
        <i class="topIcon fa-brands fa-whatsapp"></i>
        <i class="topIcon fa-brands fa-twitter"></i>
        <i class="topIcon fa-brands fa-instagram"></i>

     </div> 

      <div className="top_c">
        <ul className='topList'>

          <li className='topListItem'>
            <Link className='link' to='/'> HOME </Link>
          </li>

          <li className='topListItem'>      
              <Link className='link' to='/'> ABOUT </Link>
              </li>

          <li className='topListItem'>
          <Link className='link' to='/write'> WRITE </Link>
          </li>

          <li className='topListItem'>
          <Link className='link' to='/settings'> UPDATE </Link>
          </li>


          <li className='topListItem'>
          {user && "LOGOUT"}
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
