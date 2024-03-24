import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const LogoutReact = () => {
  let history = useHistory();
  useEffect(() => {
    localStorage.clear();
    history.push("/LoginReact");
  }, []);
  return <h1>Hello World</h1>;
};

export default LogoutReact;