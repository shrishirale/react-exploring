import "./App.css";
import { Provider } from "react-redux";
import CakeView from "./components/react-redux/CakeView";
import store from "./components/react-redux/rxstore";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1> App !</h1>
        <CakeView />
      </div>
    </Provider>
  );
}

export default App;
