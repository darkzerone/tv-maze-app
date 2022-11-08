import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Show } from "../../../../api/tvMaze/types";
import classes from "./ShowItem.module.scss";

type ShowItemProps = {
  show: Show;
};

function ShowItem({ show }: ShowItemProps) {
  return (
    <div
      key={show.id}
      className={`${classes.show_item} col-md-6 col-xl-4 row justify-content-center`}
    >
      <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
        <LazyLoadImage
          src={show.image?.medium}
          alt={`${show.name} | poster`}
          height={295}
          width={215}
        />
      </div>
      <div
        className={`${classes.show_item_info} col-sm-12 col-lg-6 d-flex flex-column`}
      >
        <div className="d-flex flex-column">
          <span>
            <b>Title:</b> {show.name}
          </span>
          <span>
            <b>Premiered:</b> {show?.premiered || "No"}
          </span>
          {show.ended && (
            <span>
              <b>Ended:</b> {show.ended}
            </span>
          )}
          <span>
            <b>Language:</b> {show.language}
          </span>
          <span>
            <b>Rating:</b>{" "}
            {show.rating.average ? `${show.rating.average}/10` : "-"}
          </span>
          <span>
            <b>Type:</b> {show.type || "unkown"}
          </span>
        </div>
        <Link className="w-100" to={`/show/${show.id}`}>
          <button type="button" className={`btn btn-light w-100`}>
            More info
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ShowItem;
