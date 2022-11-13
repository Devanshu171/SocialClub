import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
export default function Comments() {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 2,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 3,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 4,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 5,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Post</button>
      </div>
      {comments.map((c) => {
        return (
          <div className="comment">
            <img src={c.profilePic} alt="" />
            <div className="info">
              <span>{c.name}</span>
              <p>{c.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
}
