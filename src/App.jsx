import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/wrapper/Wrapper";
import Dashboard from "./pages/dashboardPage/Dashboard";
import Settings from "./pages/settingsPage/Settings";
import Brands from "./pages/brandsPage/Brands";
import Models from "./pages/modelsPage/Models";
import Locations from "./pages/locationsPage/Locations";
import Cities from "./pages/citiesPage/Cities";
import Cars from "./pages/carsPage/Cars";
import Login from "./components/login/Login";
import { useEffect } from "react";

// ?.includes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey")

function App() {
  const navigatepage = useNavigate();
  const tokenpage = localStorage.getItem("token");
  useEffect(() => {
    if (tokenpage) {
      navigatepage("/dashboard");
    } else {
      navigatepage("/");
    }
  }, []);
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
