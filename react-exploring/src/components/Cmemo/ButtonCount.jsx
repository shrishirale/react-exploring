import { memo } from "react";

function ButtonCount({ setCount }) {
  console.log("increment Count");
  return (
    <>
      <button onClick={setCount}>Increment Count</button>
    </>
  );
}
export default memo(ButtonCount);
