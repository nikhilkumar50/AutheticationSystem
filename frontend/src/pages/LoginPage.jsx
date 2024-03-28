import React, { useState } from "react";
import login from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLoginError, clearUser } from "../slices/userSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (data.error) {
        dispatch(setLoginError(data.error));
      } else {
        localStorage.setItem("user-auth", JSON.stringify(data));
        dispatch(setUser(data));
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      dispatch(
        setLoginError("An unexpected error occurred. Please try again later.")
      );
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="bg-gray-100 p-8 px-10 rounded-lg shadow-xl">
            <h2 className="text-2xl text-black font-bold text-center mb-6">
              Login
            </h2>

            <div className="flex flex-col mb-4">
              <label className="text-black">Email</label>
              <input
                id="email"
                className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ color: "#333" }}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-black">Password</label>
              <input
                id="password"
                className="p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ color: "#333" }}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="w-full py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="mt-4 text-center text-gray-700">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2">
        <img className="w-full h-full object-cover" src={login} alt="Login" />
      </div>
    </div>
  );
};

export default LoginPage;
