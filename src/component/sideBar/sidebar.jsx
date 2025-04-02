import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className='sideImg' src="/images/image.jpg" alt="" />
        <p>
     
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ad consequatur consequuntur molestiae iure atque amet
          
        </p>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">Categories</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
      </ul>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle">Follow Us</span>
      
      <div className="sidebarSocial">
      <i id='face' class="sidebarIcon  fa-brands fa-facebook"></i>
        <i id='wats'  class="sidebarIcon fa-brands fa-whatsapp"></i>
        <i id='twit'  class="sidebarIcon fa-brands fa-twitter"></i>
        <i id='insta'  class="sidebarIcon fa-brands fa-instagram"></i>
        </div>

      </div>

    </div>
  )
}
