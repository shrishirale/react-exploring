import "./App.css";
import { Provider } from "react-redux";
import CakeView from "./components/react-redux/CakeView";
import store from "./components/react-redux/async-redux/User/userStore";
import Mainview from "./components/react-redux/async-redux/Mainview";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1> App !</h1>
        <Mainview />
      </div>
    </Provider>
  );
}

export default App;
