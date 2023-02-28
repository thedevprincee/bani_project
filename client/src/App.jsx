import AppWrapper from "./App.styles";
import Auth from "./components/pages/auth/auth";
import Dashboard from "./components/pages/dashboard/Dashboard";

const App = () => {
  return (
    <>
      <AppWrapper />
      {/* <Dashboard /> */}
      <Auth />
    </>
  );
};

export default App;
