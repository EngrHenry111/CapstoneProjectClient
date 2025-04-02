import React from 'react'
import  './topbar.css'


export const Topbar = () => {
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
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>Logout</li>
        </ul>
      </div> 

      <div className="top_r">
        <img className='topImage' 
        src="/images/image.jpg" alt="" />
        <i  className="topSeachIcon  fa-solid fa-magnifying-glass"></i>
      </div>      
    </div>
  )
}
