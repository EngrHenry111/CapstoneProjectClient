
import { Sidebar } from "../../component/sideBar/sidebar"
import "./settings.css"
export const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>

            <form className="settingsForm">
                <label >profile picture</label>

                <div className="settingsPP">
                    <img src="/images/image2.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i class=" settingsPPIcon fa-solid fa-user"></i>
                    </label>

                    <input type="file" id="fileInput" 
                    style={{display:"none"}} />

                </div>
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Email</label>
                <input type="text" placeholder="Email" />
                <label>Password</label>
                <input type="text" placeholder="Password" />

                <button className="settingsSubmit">Update</button>

            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
