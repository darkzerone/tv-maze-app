import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getPaginatedShows, searchShows } from "../../../api/tvMaze/tvMaze";
import { Show } from "../../../api/tvMaze/types";

interface HomePageContextInterface {
  searchCountry: (val: string) => void;
  loading: boolean;
  shows: Show[];
  activePage: number;
  handlePageChange: (val: number) => void;
  searchActive: boolean;
}

const HomePageContext = createContext<HomePageContextInterface>({
  loading: false,
  searchCountry: () => console.error("Please implement this function."),
  shows: [],
  activePage: 1,
  searchActive: false,
  handlePageChange: () => console.error("Please implement this function."),
});

type HomePageContextProviderPropsType = {
  children: ReactNode;
};

const HomePageContextProvider = ({
  children,
}: HomePageContextProviderPropsType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [shows, setShows] = useState<Show[]>([]);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<number>(1);

  const getShowsByPage = useCallback(async (page?: number) => {
    setLoading(true);

    let response: Show[] = [];

    try {
      response = await getPaginatedShows(page);
    } catch (err) {
      console.error(err);
    } finally {
      console.log(response);
      setLoading(false);
    }

    setShows(response);
  }, []);

  const searchCountry = useCallback(
    async (val: string) => {
      if (val.length === 0) {
        setSearchActive(false);
        getShowsByPage(activePage);
        return;
      }

      setSearchActive(true);
      setLoading(true);

      let response: Show[] = [];

      try {
        const data = await searchShows(val);
        response = data.map((value) => value.show);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }

      console.log(response);

      setShows(response);
    },
    [activePage, getShowsByPage]
  );

  const handlePageChange = (page: number) => {
    if (page < 1) {
      return;
    }

    setActivePage(page);
    getShowsByPage(page);
  };

  const context = {
    searchCountry,
    shows,
    loading,
    handlePageChange,
    activePage,
    searchActive,
  };

  useEffect(() => {
    getShowsByPage();
  }, [getShowsByPage]);

  return (
    <HomePageContext.Provider value={context}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageContext;
export { HomePageContextProvider };
