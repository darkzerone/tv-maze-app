import React, { useContext } from "react";
import Spinner from "../shared/Spinner";
import Pagination from "./components/Pagination/Pagination";
import SearchBar from "./components/Searchbar/Searchbar";
import ShowItem from "./components/ShowItem/ShowItem";
import HomePageContext from "./context/HomePageContext";
import classes from "./HomePage.module.scss";

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
