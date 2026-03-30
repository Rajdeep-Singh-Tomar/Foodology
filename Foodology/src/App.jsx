import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Restorant from "./Components/Restorant";
import CartItems from "./Components/CartItems";

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [userInfo, setuserInfo] = useState("Tomar jii");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setuserInfo }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} /> {/* default "/" */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restorants/:resId" element={<Restorant />} />
          <Route path="cart" element={<CartItems />} />
          <Route path="*" element={<Error />} /> {/* catch all 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
