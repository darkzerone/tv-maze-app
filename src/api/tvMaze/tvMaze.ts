import axios, { CancelTokenSource } from "axios";
import { Show, ShowSearchResponse } from "./types";

let getShowsCancelTokenSoruce: CancelTokenSource;

export const getPaginatedShows = async (page?: number) => {
  if (getShowsCancelTokenSoruce) {
    getShowsCancelTokenSoruce.cancel("Operation canceled by the user.");
  }

  getShowsCancelTokenSoruce = axios.CancelToken.source();

  const options = {
    cancelToken: getShowsCancelTokenSoruce.token,
  };

  return (await axios
    .get<Show[]>(`https://api.tvmaze.com/shows?page=${page ?? 1}`, options)
    .then((res) => {
      return res.data;
    })) as Show[];
};

let searchShowsCancelTokenSoruce: CancelTokenSource;

export const searchShows = async (val: string) => {
  if (searchShowsCancelTokenSoruce) {
    searchShowsCancelTokenSoruce.cancel("Operation canceled by the user.");
  }

  searchShowsCancelTokenSoruce = axios.CancelToken.source();

  const options = {
    cancelToken: searchShowsCancelTokenSoruce.token,
  };

  return (await axios
    .get(`https://api.tvmaze.com/search/shows?q=${val}`, options)
    .then((response) => {
      return response.data;
    })
    .catch(function (thrown) {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      } else {
        // handle errors
      }
    })) as ShowSearchResponse;
};
