import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Service from "../pages/Service";
import Sign from "../pages/Sign";
import Profiler from "../pages/Profile";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Service />} />
      <Route path="/login" element={<Sign />} />
      <Route path="/profile" element={<Profiler />} />
    </Routes>
  );
};

export default AppRoutes;
