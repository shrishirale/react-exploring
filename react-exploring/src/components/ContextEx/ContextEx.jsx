import { useContext } from "react";
import context from "./Context";

const ContextEx = () => {
  const contextresp = useContext(context);
  return <h1>Context Api - {contextresp}</h1>;
};

export default ContextEx;
