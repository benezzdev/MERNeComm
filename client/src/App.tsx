import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Deals from "./Pages/Deals";

import About from "./Pages/About";
import Account from "./Pages/Account";
import ErrorPage from "./Pages/ErrorPage";
import Favourites from "./Pages/Favourites";
import ProtectedRoute from "./Components/ProtectedRoute";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Menu } from "./Components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Deals />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
