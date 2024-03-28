import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";
import SignUpPage from "./pages/SignUpPage"


const App = () => {
  const user = useRecoilValue(userAtom);
  
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
