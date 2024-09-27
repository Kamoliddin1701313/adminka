import { Route, Routes } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/wrapper/Wrapper";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Brands from "./pages/Brands";
import Models from "./pages/Models";
import Locations from "./pages/Locations";
import Cities from "./pages/Cities";
import Cars from "./pages/Cars";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Wrapper />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/models" element={<Models />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cars" element={<Cars />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
