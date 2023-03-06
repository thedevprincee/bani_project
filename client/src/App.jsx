import AppWrapper from "./App.styles";
import Auth from "./components/pages/auth/auth";
import Dashboard from "./components/pages/dashboard/Dashboard";
import {Routes, Route, Navigate, } from 'react-router-dom'
const ProtectedRoute = ({redirectPath = "/", children})=>{
  const token = localStorage.getItem("token")
  if(!token){
    return <Navigate to={redirectPath} replace/>
  }
  return children
}
const App = () => {
  return (
    <>
      <AppWrapper />
      <Routes>
        <Route path="/"
          element={<Auth />}
        />
        <Route path="/dashboard"
          element={
            // <ProtectedRoute>
              <Dashboard />
            // </ProtectedRoute>
          }
        />
        <Route path="*" element={<Auth/>}/>
        
      </Routes>
    </>
  );
};

export default App;
