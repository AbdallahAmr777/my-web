import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <header className=" flex">
      <button
        className="icon-menu flex"
        onClick={() => {
          setShowModel(true);
        }}
      />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            mode === "dark" ? "light" : "dark"
          );
          setMode(localStorage.getItem("currentMode"));
        }}
      >
        {mode === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="model ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModel(false);
                }}
              />{" "}
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
