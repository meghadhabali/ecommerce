import { useState } from "react";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>{isLogin ? <p>Show my details</p> : <Navigate replace to="/login" />}</>
  );
};

export default Profile;
