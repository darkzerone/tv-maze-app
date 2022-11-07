import React from "react";
import logo from "../../logo.svg";
import classes from "./homepage.module.scss";

function HomePage() {
  return (
    <div className={classes.app}>
      <header className={classes.app_header}>
        <img src={logo} className={classes.app_logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={classes.app_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default HomePage;
