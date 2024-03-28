import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage"
import { useSelector } from 'react-redux';
import { setUser } from './slices/userSlice';
import { store } from './store';




const App = () => {
  useEffect(() => { 
    const storedUser = localStorage.getItem('user-auth');
    if (storedUser) {
        store.dispatch(setUser(JSON.parse(storedUser)));
    }
  }, []);
  const user = useSelector((state) => state.user.user); 
  
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUpPage /> : <Navigate to="/" />}
        />
        
      </Routes>
    </Layout>
  );
};

export default App;
