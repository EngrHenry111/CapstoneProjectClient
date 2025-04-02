import './header.css'

export const Header = () => {
  return (
    <div className='header' >
       <div className="headerTitle">
        <span className='headerTitleSm'>React and NodeJs</span>
        <span className='headerTitleLg'>Blog</span>
       </div>

      <img className='headerImg'
       src="/images/image.jpg" alt="" />

    </div>
  )
}
