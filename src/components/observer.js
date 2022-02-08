import React, { useContext } from "react";
import { UserContext } from "../App";

const Observer = ({ type }) => {
  const { state, dispatch } = useContext(UserContext);
  dispatch({ type: "USER", payload: true });
  console.log(`State ${state}`);

  return <div></div>;
};

export default Observer;
