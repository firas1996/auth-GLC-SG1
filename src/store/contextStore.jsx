import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  email: "",
  password: "",
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});
export default AuthContext;

export const AuthProvider = ({ children }) => {
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
      {children}
    </AuthContext.Provider>
  );
};
