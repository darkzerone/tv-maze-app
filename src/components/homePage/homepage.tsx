import React, { useContext, useEffect, useState } from "react";
import { FormControl, Pagination } from "react-bootstrap";
import Spinner from "../shared/spinner";
import HomePageContext from "./context/homePageContext";
import classes from "./homePage.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HomePage() {
  const {
    searchCountry,
    shows,
    loading,
    activePage,
    searchActive,
    handlePageChange,
  } = useContext(HomePageContext);

  const maxPages = 260;
  const [pagesArray, setPagesArray] = useState<number[]>([1, 2, 3, 4, 5]);
  const pageLimit = 5;

  useEffect(() => {
    const startPage = Math.floor((activePage - 1) / pageLimit) * pageLimit;
    setPagesArray(
      new Array(pageLimit)
        .fill(0, 0, 5)
        .map((_, index) => startPage + index + 1)
    );
  }, [activePage]);

  return (
    <div>
      <div className={classes.searchbar_container}>
        <div className={classes.searchbar_wrapper}>
          <FormControl
            onChange={(event) => {
              searchCountry(event.target.value);
            }}
            placeholder={"Start typing to search for a show.."}
          />
        </div>
      </div>
      <div className={classes.content}>
        <div className={`${classes.showList} row`}>
          {loading ? (
            <div>
              <Spinner />
            </div>
          ) : shows.length > 0 ? (
            shows.map((show) => (
              <div className={`${classes.show_item} col-md-6 col-xl-4 row`}>
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
                  <button
                    type="button"
                    className={`btn btn-light ${classes.show_item_button}`}
                  >
                    More info
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No show available with this name... </div>
          )}
        </div>
        {!searchActive && (
          <div className={classes.pagination_container}>
            <Pagination>
              <Pagination.First
                disabled={activePage === 1}
                onClick={() => handlePageChange(1)}
              />
              <Pagination.Prev
                disabled={activePage === 1}
                onClick={() => handlePageChange(activePage - 1)}
              />
              {pagesArray.map((page) => {
                return (
                  <Pagination.Item
                    onClick={() => handlePageChange(page)}
                    active={activePage === page}
                  >
                    <span>{page}</span>
                  </Pagination.Item>
                );
              })}
              <Pagination.Next
                onClick={() => handlePageChange(activePage + 1)}
                disabled={activePage === maxPages}
              />
              <Pagination.Last
                disabled={activePage === maxPages}
                onClick={() => handlePageChange(maxPages)}
              />
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
