import { memo } from "react";

function ButtonSalary({ setSalary }) {
  console.log("increment Salary");
  return (
    <>
      <button onClick={setSalary}>Increment Salary</button>
    </>
  );
}
export default memo(ButtonSalary);
