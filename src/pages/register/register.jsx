// import { Link } from "react-router-dom"
// import "./register.css"
// import axios from "axios";
// import { useNavigate, useParams } from  "react-router-dom";
// import { useState } from "react";

// export const Register = () => {


//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post(
//         "https://capstoneprojectserver-1.onrender.com/users/new-users",
//         { userName, email, password }
//       );
  
//       const { message, token, user } = response.data;
  
//       // Save to localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
  
//       alert(message || "Signup successful!");
//       setUserName("");
//       setEmail("");
//       setPassword("");
  
//       // Redirect
//       navigate(`/upload/${user._id}`); // You can also just use `/` if you don't need upload
//     } catch (error) {
//       console.error("Signup failed:", error);
//       alert("Signup failed. Please try again.");
//     }
//   };

// // const navigate = useNavigate();

// // const [userName , setUserName] = useState("");
// // const [email , setEmail] = useState("");
// // const [password , setPassword] = useState("");

// // const handleSubmit = (e) => {
// //   e.preventDefault();

// // axios
// //     .post("https://capstoneprojectserver-1.onrender.com/users/new-users", {
 
// //   userName,
// //   email,
// //   password, 
// // })

// //   .then((response) => {
// //     console.log(response.data.data)
// //     alert(response.data.message);
// //     setUserName("");
// //     setEmail("");
// //     setPassword("");
// //     navigate(`/upload/${response.data.data}`);
// //   })
// //   .catch((error) => console.error(error));

// }
//   return (
//     <div className="register">
//       <span className="registerTitle">Register</span>
//         <form onSubmit={handleSubmit}  className="registerForm">
//             <label >Username</label>
//             <input className="registerInput" type="text"
          
//             placeholder="Enter your username........"
//             value={userName} 
//             onChange={(e) => setUserName(e.target.value)}
//             />
            
            

//             <label >Email</label>
//             <input className="registerInput" type="email" 
//             placeholder="Enter your email........"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             />

//             <label >Password</label>
//             <input className="registerInput" type="password" 
//             placeholder="Enter your password........"
//             value={password}
//             onChange={(e)=> setPassword(e.target.value)}
//             />
//             <div className="registerButtonContainer">
//             <button className="registerButton"
//             type="submit"
//             >Register</button>
//             </div>

//         </form>
//         <button className="registerLoginButton">
//         <Link  to="/login">Login</Link>
//         </button>
//     </div>
//   )
// }



import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
import { useState } from "react";

export const Register = () => {
 // const navigate = useNavigate(); //  Needed for redirection

  //  State hooks to store form input values
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post( "https://capstoneprojectserver-1.onrender.com/users/new-users", {
        userName,
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.data._id)
        alert(response.data.message);
        setUserName("");
        setEmail("");
        setPassword("");
        navigate(`/post/${response.data.data._id}`);
      })
      .catch((error) => console.error(error));
    };
 

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="registerButtonContainer">
          <button className="registerButton" type="submit">
            Register
          </button>
        </div>
      </form>

      <button className="registerLoginButton">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};


//  try {
//       const response = await axios.post(
//         "https://capstoneprojectserver-1.onrender.com/users/new-users",
//         { userName,
//           email,
//           password }
//       );

//       const { message, token, user } = response.data;

//       // Save auth info in localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));

//       alert(message || "Signup successful!");
//       setUserName("");
//       setEmail("");
//       setPassword("");

//       // Navigate to a protected or upload route
//       navigate(`/upload/${user._id}`);
//     } catch (error) {
      
//       console.error("Signup failed:", error.response?.data || error.message);
//     alert(error.response?.data?.message || "Signup failed. Please try again.");
      
//       console.error("Signup failed:", error);
//       //alert("Signup failed. Please try again.");