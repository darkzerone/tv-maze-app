import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classes from "./layout.module.scss";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRoot, setIsRoot] = useState<boolean>(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      setIsRoot(true);
      return;
    }

    setIsRoot(false);
  }, [location]);
  return (
    <div
      className={`${classes.layout} d-flex flex-column justify-content-between`}
    >
      <div>
        <div
          className={`${classes.header} d-flex align-items-center justify-content-center`}
        >
          {!isRoot && (
            <div className={classes.back_button} onClick={() => navigate(-1)}>
              <i className="bi bi-chevron-left"></i>
              <span>Go back</span>
            </div>
          )}
          <h1>TVMaze</h1>
        </div>
        <div className={classes.content}>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <p>Copyright &copy; {new Date().getFullYear()} - Steven Leunk</p>
      </div>
    </div>
  );
}

export default Layout;
