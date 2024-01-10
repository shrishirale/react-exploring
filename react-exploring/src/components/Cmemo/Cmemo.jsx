import { useCallback, useMemo, useState } from "react";
import Welcome from "./Welcome";
import Count from "./Count";
import ButtonCount from "./ButtonCount";
import Salary from "./Salary";
import ButtonSalary from "./ButtonSalary";

// Using memo will cause React to skip rendering a component if its props have not changed.
function Cmemo() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(50000);

  // count > 0 ? (<h1>Count-{count}</h1>) : (<h1>No count</h1>)
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  // changed to value from function call
  const checkCount = useMemo(() => {
    console.log("checking count");
    return count > 0;
  }, [count]);

  return (
    <>
      {!checkCount && <p>Count is zero</p>}
      <Welcome />
      <Count count={count} />
      <ButtonCount setCount={handleCount} />
      <Salary salary={salary} />
      <ButtonSalary setSalary={handleSalary} />
    </>
  );
}
export default Cmemo;
