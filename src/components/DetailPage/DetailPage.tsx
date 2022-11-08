import { useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../shared/Spinner";
import CastMember from "./components/CastMember/CastMember";
import ShowInfo from "./components/ShowInfo/ShowInfo";
import DetailPageContext from "./context/DetailPageContext";

type DetailPageParams = {
  id: string;
};

function DetailPage() {
  const { getShowById, loading, show } = useContext(DetailPageContext);
  const { id } = useParams<DetailPageParams>();

  const getShowDetails = useCallback(() => {
    if (id) {
      return getShowById(id);
    }
  }, [getShowById, id]);

  useEffect(() => {
    getShowDetails();
  }, [getShowDetails]);

  return (
    <div className="container">
      {!loading && show?.name ? (
        <>
          <ShowInfo show={show} />
          <div className={`container mt-5`}>
            <div className="col-12">
              <h2>Top cast</h2>
            </div>
            <div className="row">
              {show._embedded?.cast.slice(0, 8).map((castMember, index) => (
                <CastMember
                  key={`${castMember.character.id} + ${index}`}
                  castMember={castMember}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default DetailPage;
