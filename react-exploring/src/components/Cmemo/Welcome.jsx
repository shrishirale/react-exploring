import { memo } from "react";
const Welcome = () => {
  console.log("in welcome");
  return <h1> Welcome</h1>;
};
export default memo(Welcome);
