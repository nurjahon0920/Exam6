import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NewProduct" element={<NewProduct />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
