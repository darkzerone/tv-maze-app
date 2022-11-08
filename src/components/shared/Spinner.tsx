import React, { useContext } from "react";
import OnlineStatusContext from "../../utilities/OnlineStatusProvider/OnlineStatusProvider";

function Spinner() {
  const online = useContext(OnlineStatusContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-light" role="status"></div>
      <span className="mt-2">
        {!online
          ? "You are in offline mode, it's possible that the data you are trying to fetch is not available."
          : "Loading data, this can take a while..."}
      </span>
    </div>
  );
}

export default Spinner;
