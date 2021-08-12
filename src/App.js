import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "./theme/color";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Router>
      <Navbar />
      <FiChevronUp
        className="scrollTop"
        onClick={scrollTop}
        style={{
          display: showScroll ? "flex" : "none",
          fontSize: 36,
          backgroundColor: "black",
          color: "white",
        }}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
