import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
export default function Login() {
  const [input, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const nevigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(input);
  };
  const { login } = useContext(AuthContext);
  useEffect(() => {}, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      nevigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
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
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
          {err && err}
        </div>
      </div>
    </div>
  );
}
