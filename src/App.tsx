import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailPageContextProvider } from "./components/detailPage/context/detailPageContext";
import DetailPage from "./components/detailPage/detailPage";
import { HomePageContextProvider } from "./components/homePage/context/homePageContext";
import HomePage from "./components/homePage/homePage";
import Layout from "./components/layout/layout";
import { OnlineStatusProvider } from "./utilities/onlineStatusProvider/onlineStatusProvider";

function App() {
  return (
    <OnlineStatusProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <HomePageContextProvider>
                  <HomePage />
                </HomePageContextProvider>
              }
            />
            <Route
              path="/show/:id"
              element={
                <DetailPageContextProvider>
                  <DetailPage />
                </DetailPageContextProvider>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </OnlineStatusProvider>
  );
}

export default App;
