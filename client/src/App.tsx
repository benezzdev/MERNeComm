import { Routes, Route, BrowserRouter } from "react-router-dom";
import Deals from "./Pages/Deals";

import About from "./Pages/About";
import Account from "./Pages/Account";
import ErrorPage from "./Pages/ErrorPage";
import Favourites from "./Pages/Favourites";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Menu } from "./Components/Menu";
import CreateDeal from "./Pages/CreateDeal";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Deals />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/createdeal" element={<CreateDeal />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
