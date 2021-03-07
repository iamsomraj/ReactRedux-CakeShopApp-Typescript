import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import { store } from "./store";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserListContainer from "./components/UserListContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <UserListContainer />
    </Provider>
  );
};

export default App;
