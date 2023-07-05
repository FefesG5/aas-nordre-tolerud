import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Menu from "./pages/Menu";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    case "/menu":
      component = <Menu />;
      break;
  }
  return (
    <>
      <Header />
      {component}
    </>
  );
}

export default App;
