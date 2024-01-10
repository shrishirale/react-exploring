import { memo } from "react";

function Salary({ salary }) {
  console.log("in Salary");
  return (
    <>
      <h1>Salary - {salary}</h1>
    </>
  );
}
export default memo(Salary);
