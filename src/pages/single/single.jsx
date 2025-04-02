import { Sidebar } from '../../component/sideBar/sidebar'
import { SinglePost } from '../../component/singlePost/singlePost'
import './single.css'

export const Single = () => {
  return (
    <div className='single'>
         <SinglePost/>
       <Sidebar/>
    </div>
  )
}
