import { createContext, ReactNode, useCallback, useState } from "react";
import { getShowDetailsById } from "../../../api/tvMaze/tvMaze";
import { ShowDetail } from "../../../api/tvMaze/types";
import { db } from "../../../indexDBConfig";

interface DetailPageContextInterface {
  getShowById: (id: string) => void;
  loading: boolean;
  show: ShowDetail | undefined;
}

const DetailPageContext = createContext<DetailPageContextInterface>({
  getShowById: () => console.error("Please implement this function."),
  loading: false,
  show: undefined,
});

type DetailPageContextProviderPropsType = {
  children: ReactNode;
};

const DetailPageContextProvider = ({
  children,
}: DetailPageContextProviderPropsType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<ShowDetail | undefined>(undefined);

  const getShowById = useCallback(async (id: string) => {
    setLoading(true);
    let response: ShowDetail = {} as ShowDetail;

    const storedShow = await db.show.where("showId").equals(id).first();

    if (storedShow) {
      setShow(storedShow.show);
      setLoading(false);
      return;
    }

    try {
      response = await getShowDetailsById(id);
    } catch (err) {
      console.error(err);
    } finally {
      if (response?.name !== undefined) {
        await db.show.add({ showId: id, show: response });
      }

      setShow(response);
      setLoading(false);
    }
  }, []);

  const context = {
    getShowById,
    show,
    loading,
  };

  return (
    <DetailPageContext.Provider value={context}>
      {children}
    </DetailPageContext.Provider>
  );
};

export default DetailPageContext;
export { DetailPageContextProvider };
