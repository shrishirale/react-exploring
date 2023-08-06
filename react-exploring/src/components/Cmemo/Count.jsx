import { memo } from "react";

function Count({ count }) {
  console.log("in Count");
  return (
    <>
      <h1>Count - {count}</h1>
    </>
  );
}
export default memo(Count);
