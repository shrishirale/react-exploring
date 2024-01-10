import { useSelector } from "react-redux";
import BuyCake from "./BuyCake";

function CakeView() {
  const cakeCount = useSelector((state) => state.cakecount);
  return (
    <div>
      Cake Count - {cakeCount}
      <BuyCake />
    </div>
  );
}

export default CakeView;
