import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
export default function Login() {
  const { login } = useContext(AuthContext);
  useEffect(() => {}, []);
  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            rem? Cupiditate saepe delectus similique facilis fuga quibusdam hic
            beatae consequuntur labore nam, dolor, inventore eaque adipisci,
            mollitia quam et veritatis!
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
