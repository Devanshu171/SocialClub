import "./posts.scss";
import Post from "../post/Post";
export default function Posts() {
  const posts = [
    {
      id: 1,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: "https://images.unsplash.com/photo-1668027686570-aff6795ed3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: "https://images.unsplash.com/photo-1668027686570-aff6795ed3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: "https://images.unsplash.com/photo-1668027686570-aff6795ed3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: "https://images.unsplash.com/photo-1668027686570-aff6795ed3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 5,
      name: "Json Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1668182618034-a67cba9a9fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: "https://images.unsplash.com/photo-1668027686570-aff6795ed3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ];
  return (
    <div className="posts">
      {posts.map((p) => {
        return <Post post={p} key={p.id} />;
      })}
    </div>
  );
}
