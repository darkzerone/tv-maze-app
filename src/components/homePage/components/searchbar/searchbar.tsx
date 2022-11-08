import React, { useContext } from "react";
import { FormControl } from "react-bootstrap";
import OnlineStatusContext from "../../../../utilities/onlineStatusProvider/onlineStatusProvider";
import HomePageContext from "../../context/homePageContext";
import classes from "./searchbar.module.scss";

function SearchBar() {
  const online = useContext(OnlineStatusContext);
  const { searchShow } = useContext(HomePageContext);

  return (
    <div className={classes.searchbar_container}>
      <div className={classes.searchbar_wrapper}>
        <FormControl
          onChange={(event) => {
            searchShow(event.target.value);
          }}
          disabled={!online}
          placeholder={
            !online
              ? "You are currently in offline mode, searching is disabled"
              : "Start typing to search for a show.."
          }
        />
      </div>
    </div>
  );
}

export default SearchBar;
