import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/contextStore";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // console.log("effect");
    const token = localStorage.getItem("token");
    if (token == "true") {
      setIsLoggedIn(true);
    }
  }, []);
  // console.log("test");
  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "true");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
