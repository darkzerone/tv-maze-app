import React from "react";

function Spinner() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-light" role="status"></div>
      <span className="mt-2">Loading data, this can take a while...</span>
    </div>
  );
}

export default Spinner;
