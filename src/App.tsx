import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { HomePageContextProvider } from "./components/homePage/context/homePageContext";
import HomePage from "./components/homePage/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route
            index
            element={
              <HomePageContextProvider>
                <HomePage />
              </HomePageContextProvider>
            }
          ></Route>
          {/* Detail route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
