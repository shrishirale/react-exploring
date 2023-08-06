import { useDispatch } from "react-redux";

const BuyCake = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: "BUY_CAKE" })}>By cake</button>
    </>
  );
};
export default BuyCake;
