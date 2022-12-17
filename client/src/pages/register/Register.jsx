import { Link } from "react-router-dom";
import axios from "axios";
import "./register.scss";
import { useState } from "react";

export default function Register() {
  const [input, setInputs] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(input);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/register",
        input
      );
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />

            <button type="submit" onClick={handleClick}>
              Register
            </button>
          </form>
          {err && err}
        </div>
        <div className="right">
          <h1>Social Club.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            rem? Cupiditate saepe delectus similique facilis fuga quibusdam hic
            beatae consequuntur labore nam, dolor, inventore eaque adipisci,
            mollitia quam et veritatis!
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
