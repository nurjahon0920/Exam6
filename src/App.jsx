import { Router, Route, Routes } from "react-router-dom";
import Sidebar from "./pages/AdmimnPanel/Sidebar/Sidebar";
import Admin from "./pages/AdmimnPanel/Admin/Admin";
import AdminPanel from "./pages/AdmimnPanel/AdminPanel";
import "./index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPanel />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Sidebar />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
