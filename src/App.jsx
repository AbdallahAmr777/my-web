import { useEffect, useState } from "react";
import Header from "./component/1-header/Header";
import Hero from "./component/2-hero/Hero";
import Main from "./component/3-main/Main";
import Contact from "./component/4-contact/Contact";
import Footer from "./component/5-footer/Footer";

function App() {
  const [ShowScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  return (
    <div className="container" id="up">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up" style={{ opacity: ShowScroll ? 1 : 0, transition: "0.3s" }}>
        <button className="icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
