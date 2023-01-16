import Router from "./src/Router";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
