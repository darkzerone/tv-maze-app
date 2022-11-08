import React, { useContext } from "react";
import Spinner from "../shared/spinner";
import Pagination from "./components/pagination/pagination";
import SearchBar from "./components/searchbar/searchbar";
import ShowItem from "./components/showItem/showItem";
import HomePageContext from "./context/homePageContext";
import classes from "./homePage.module.scss";

function HomePage() {
  const { shows, loading, searchActive } = useContext(HomePageContext);

  return (
    <div>
      <SearchBar />
      <div className={classes.content}>
        <div className={`${classes.showList} row`}>
          {loading ? (
            <div>
              <Spinner />
            </div>
          ) : shows.length > 0 ? (
            shows.map((show) => <ShowItem key={show.id} show={show} />)
          ) : (
            <div>No show available with this name... </div>
          )}
        </div>
        {!searchActive && <Pagination />}
      </div>
    </div>
  );
}

export default HomePage;
