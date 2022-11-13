import { Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Register</button>
          </form>
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
