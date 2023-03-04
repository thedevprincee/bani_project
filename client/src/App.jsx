import AppWrapper from "./App.styles";
import Auth from "./components/pages/auth/auth";
import Dashboard from "./components/pages/dashboard/Dashboard";
import {Routes, Route, } from 'react-router-dom'
const App = () => {
  return (
    <>
      <AppWrapper />
      <Routes>
        <Route path="/"
          element={<Auth />}
        />
        <Route path="/dashboard"
          element={<Dashboard />}
        />
        
      </Routes>
    </>
  );
};

export default App;
