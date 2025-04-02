import "./register.css"

export const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
        <form  className="registerForm">
            <label >Username</label>
            <input className="registerInput" type="text" 
            placeholder="Enter your username........" />

            <label >Email</label>
            <input className="registerInput" type="text" 
            placeholder="Enter your email........" />

            <label >Password</label>
            <input className="registerInput" type="text" placeholder="Enter your password........" />
            <div className="registerButtonContainer">
            <button className="registerButton">Register</button>
            </div>

        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
