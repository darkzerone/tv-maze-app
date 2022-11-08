import debounce from "lodash.debounce";
import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { FormControl } from "react-bootstrap";
import OnlineStatusContext from "../../../../utilities/onlineStatusProvider/onlineStatusProvider";
import HomePageContext from "../../context/HomePageContext";
import classes from "./Searchbar.module.scss";

function SearchBar() {
  const online = useContext(OnlineStatusContext);
  const { searchShow } = useContext(HomePageContext);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      searchShow(e.target.value);
    },
    [searchShow]
  );

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 400);
  }, [handleChange]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className={classes.searchbar_container}>
      <div className={classes.searchbar_wrapper}>
        <FormControl
          onChange={debouncedResults}
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
