import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="bg-primary text-primary min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, {user ? user.name : "Guest"}!
        </h1>
        <p className="text-lg mb-8">You are now logged in.</p>
        
      </div>
    </div>
  );
};

export default Home;
