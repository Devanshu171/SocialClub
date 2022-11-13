import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (inputs) => {
    // const res = await axios.post(
    //   "http://localhost/8000/api/auth/login",
    //   inputs,
    //   {
    //     withCredentials: true,
    //   }
    // );
    setCurrentUser({
      id: 1,
      name: "dev",
      profilePic:
        "https://images.pexels.com/photos/2433945/pexels-photo-2433945.jpeg?cs=srgb&dl=pexels-edwin-ariel-valladares-2433945.jpg&fm=jpg&_gl=1*19lbpqy*_ga*MTc4NjMzNjc1My4xNjY4MDA1ODY5*_ga_8JE65Q40S6*MTY2ODAxMzY4OS4yLjEuMTY2ODAxMzY5NC4wLjAuMA..",
    });
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
