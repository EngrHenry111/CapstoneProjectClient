
// import { Sidebar } from "../../component/sideBar/sidebar"
// import "./settings.css"
// export const Settings = () => {
//   return (
//     <div className='settings'>
//         <div className="settingsWrapper">
//             <div className="settingsTitle">
//                 <span className="settingsUpdateTitle">Update your account</span>
//                 <span className="settingsDeleteTitle">Delete Account</span>
//             </div>

//             <form className="settingsForm">
//                 <label >profile picture</label>

//                 <div className="settingsPP">
//                     <img src="/images/image2.jpg" alt="" />
//                     <label htmlFor="fileInput">
//                     <i class=" settingsPPIcon fa-solid fa-user"></i>
//                     </label>

//                     <input type="file" id="fileInput" 
//                     style={{display:"none"}} />

//                 </div>
//                 <label>Username</label>
//                 <input type="text" placeholder="Username" />
//                 <label>Email</label>
//                 <input type="text" placeholder="Email" />
//                 <label>Password</label>
//                 <input type="text" placeholder="Password" />

//                 <button className="settingsSubmit">Update</button>

//             </form>
//         </div>
//         <Sidebar/>
//     </div>
//   )
// }






import { useState } from "react";
import { Sidebar } from "../../component/sideBar/sidebar";
import axios from "axios";
import "./settings.css";

export const Settings = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userName,
      email,
      password,
    };

    try {
      // Optional: handle profile picture upload if backend supports it
      if (file) {
        const data = new FormData();
        data.append("file", file);
        updatedUser.profilePic = file.name; // Adjust as per backend expectation
        // Optionally, send image upload request separately here
      }

      // Replace USER_ID with the actual user ID, or retrieve it from auth
      await axios.put(`https://capstoneprojectserver-1.onrender.com/users/updateUser`, updatedUser);
     
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : "/images/image2.jpg"} alt="profile" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label> 
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="settingsSubmit" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
