import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AttributionPage from "./pages/AttributionsPage";
import { Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import menuArray from "./data/menuData";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/attributions"
            element={<AttributionPage data={menuArray} />}
          />
        </Routes>
      </main>
      <Footer />
    </I18nextProvider>
  );
}
