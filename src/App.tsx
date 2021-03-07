import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import { store } from "./store";
import IceCreamContainer from "./components/IceCreamContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CakeContainer />
      <IceCreamContainer />
    </Provider>
  );
};

export default App;
