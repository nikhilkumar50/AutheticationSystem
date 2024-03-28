import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice'; 

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user); 
  const dispatch = useDispatch(); 
  
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }
      localStorage.removeItem("user-connective");
      dispatch(setUser(null));
      navigate("/auth");
    } catch (error) {
      showToast("Error", data.error, "error");
    }
  };

  return (
    <div className="nav-div flex items-center justify-between h-20 font-bold">
      <div className="hidden md:flex md:flex-row md:gap-2">
        <Link to="/">
          <h1 className="ml-2 text-2xl text-white">Authetication System</h1>
        </Link>
      </div>

      {user ? (
        <div className="hidden md:flex md:flex-row">
          <button
            onClick={handleLogout}
            className="ml-2 px-4 py-2  bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white rounded-sm shadow-xl hover:shadow-2xl"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="hidden md:flex md:flex-row">
          <div className="hidden md:block">
            
          </div>
        </div>
      )}

      {/* Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          
          <li className="py-6">{/* <ThemeToggle /> */}</li>

          <div className="flex flex-col w-full p-4">
            {!user && (
              <>
                <Link to="/signin">
                  <button
                    onClick={handleNav}
                    className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl"
                  >
                    Login
                  </button>
                </Link>
                <Link onClick={handleNav} to="/signup">
                  <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
