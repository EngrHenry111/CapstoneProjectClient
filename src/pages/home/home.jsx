import { Header } from '../../component/header/header'
import { Posts } from '../../component/posts/posts'
import { Sidebar } from '../../component/sideBar/sidebar'

import  './home.css'

export const Home = () => {
  return (
    <>
      <Header/>
    <div className='home'>
       <Posts/>
       <Sidebar/>
    </div>
    </>
  )
}
