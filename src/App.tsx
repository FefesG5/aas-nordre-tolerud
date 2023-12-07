// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import AttributionPage from "./pages/AttributionsPage";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Data
import menuData from "./data/menuData";

// Libraries
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/attributions"
            element={<AttributionPage data={menuData} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
