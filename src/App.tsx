import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CakeContainer />
    </Provider>
  );
};

export default App;
