import Router from "./src/Router";

import AuthProvider from "./src/context/AuthProvider";

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
