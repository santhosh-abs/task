import React from "react";
import { BrowserRouter ,HashRouter ,Route, Routes } from "react-router-dom";
import { LandingPage,WelcomePage,Signin,Enterfair,Dashboard, PreReq, PreReqIndex } from "./asyncpages";


const Routers = (props) => {
  return (
    // <HashRouter>

      <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/welcome-screen" element={<WelcomePage/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/enter-fair" element={<Enterfair/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
         
      </Routes>
      // {/* </HashRouter> */}
  );
};
export default Routers;
