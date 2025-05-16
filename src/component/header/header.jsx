import './header.css'

export const Header = () => {
  return (
    <div className='header' >
       <div className="headerTitle">
        <span className='headerTitleSm'>Latest Technologies Frameworks information</span>
        <span className='headerTitleLg'>Blog Post</span>
       </div>

      <img className='headerImg'
       src="/images/blogging1.png" alt="" />

    </div>
  )
}
