import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
export default function Stories() {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "deb",
      img: "https://images.pexels.com/photos/2433945/pexels-photo-2433945.jpeg?cs=srgb&dl=pexels-edwin-ariel-valladares-2433945.jpg&fm=jpg&_gl=1*19lbpqy*_ga*MTc4NjMzNjc1My4xNjY4MDA1ODY5*_ga_8JE65Q40S6*MTY2ODAxMzY4OS4yLjEuMTY2ODAxMzY5NC4wLjAuMA..",
    },
    {
      id: 2,
      name: "deb",
      img: "https://images.pexels.com/photos/2433945/pexels-photo-2433945.jpeg?cs=srgb&dl=pexels-edwin-ariel-valladares-2433945.jpg&fm=jpg&_gl=1*19lbpqy*_ga*MTc4NjMzNjc1My4xNjY4MDA1ODY5*_ga_8JE65Q40S6*MTY2ODAxMzY4OS4yLjEuMTY2ODAxMzY5NC4wLjAuMA..",
    },
    {
      id: 3,
      name: "deb",
      img: "https://images.pexels.com/photos/2433945/pexels-photo-2433945.jpeg?cs=srgb&dl=pexels-edwin-ariel-valladares-2433945.jpg&fm=jpg&_gl=1*19lbpqy*_ga*MTc4NjMzNjc1My4xNjY4MDA1ODY5*_ga_8JE65Q40S6*MTY2ODAxMzY4OS4yLjEuMTY2ODAxMzY5NC4wLjAuMA..",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((s) => {
        return (
          <div key={s.id} className="story">
            <img src={s.img} alt="" />
            <span>{s.name}</span>
          </div>
        );
      })}
    </div>
  );
}
