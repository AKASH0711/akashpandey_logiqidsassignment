import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import General from "./pages/General";
import HealthScience from "./pages/HealthScience";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <div class Name="App">
          {/* <h1>Jai mata di!</h1> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Business" element={<Business />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/general" element={<General />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/health_science" element={<HealthScience />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
