import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import Profile from "../profile/Profile";
import "./home.scss";
export default function Home() {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
}
