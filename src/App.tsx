import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailPageContextProvider } from "./components/DetailPage/context/DetailPageContext";
import DetailPage from "./components/DetailPage/DetailPage";
import { HomePageContextProvider } from "./components/HomePage/context/HomePageContext";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import { OnlineStatusProvider } from "./utilities/OnlineStatusProvider/OnlineStatusProvider";

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
