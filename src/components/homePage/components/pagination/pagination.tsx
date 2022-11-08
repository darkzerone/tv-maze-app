import React, { useContext, useEffect, useState } from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import HomePageContext from "../../context/homePageContext";
import classes from "./pagination.module.scss";

function Pagination() {
  const { activePage, handlePageChange } = useContext(HomePageContext);
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
    <div className={classes.pagination_container}>
      <BootstrapPagination>
        <BootstrapPagination.First
          disabled={activePage === 1}
          onClick={() => handlePageChange(1)}
        />
        <BootstrapPagination.Prev
          disabled={activePage === 1}
          onClick={() => handlePageChange(activePage - 1)}
        />
        {pagesArray.map((page) => (
          <BootstrapPagination.Item
            key={page}
            onClick={() => handlePageChange(page)}
            active={activePage === page}
          >
            <span>{page}</span>
          </BootstrapPagination.Item>
        ))}
        <BootstrapPagination.Next
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === maxPages}
        />
        <BootstrapPagination.Last
          disabled={activePage === maxPages}
          onClick={() => handlePageChange(maxPages)}
        />
      </BootstrapPagination>
    </div>
  );
}

export default Pagination;
