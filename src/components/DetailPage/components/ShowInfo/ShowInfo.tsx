import React from "react";
import { ShowDetail } from "../../../../api/tvMaze/types";
import classes from "./ShowInfo.module.scss";

type CastMemberProps = {
  show: ShowDetail;
};

function ShowInfo({ show }: CastMemberProps) {
  return (
    <div className={`${classes.header} row mt-5`}>
      <div className="col-12 col-lg-auto d-flex justify-content-center">
        <img
          className={`${classes.poster}`}
          src={show.image?.original}
          alt={`${show.name} | poster`}
        />
      </div>
      <div className="col-12 col-lg-6 d-flex flex-column mt-4 mt-md-0 pd-md-0">
        <h1>{show.name}</h1>
        <div className="mb-2 d-flex flex-column">
          {show.network && (
            <span>
              <b>Network:</b> {show.network.name} |{" "}
              {show.network.country.name}
            </span>
          )}
          <span>
            <b>Language:</b> {show.language}
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
    </div>
  );
}

export default ShowInfo;
