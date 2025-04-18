import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/contextStore";
import axios from "axios";

function App() {
  const [id, setId] = useState("");
  const getUsers = async () => {
    const res = await axios.get("http://10.33.2.3:7777/users");
    console.log(res.data.data.users[0]._id);
    setId(res.data.data.users[3]._id);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
        <h2>sdffsdf:{id}</h2>
      </main>
    </>
  );
}

export default App;
