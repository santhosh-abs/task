import React from "react";
import { BrowserRouter ,HashRouter ,Route, Routes } from "react-router-dom";
import Dashboard from '../app/dashboard/dasboard'
import Product from '../app/products/product'
import Compaign from '../app/campaign/campaign'


const Routers = () => {
  return (
    <BrowserRouter>

      <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/compaign" element={<Compaign/>} />
          {/* <Route path="/enter-fair" element={<Enterfair/>} />
          <Route path="/dashboard" element={<Dashboard/>} /> */}
         
      </Routes>
      </BrowserRouter>
  );
};
export default Routers;
// import { Navigate, useRoutes } from 'react-router-dom';
// import ProductPage from '../app/products/product'
// import Dashboard from '../app/dashboard/dasboard';
// import Compaigns from '../app/campaign/campaign'

// export default function Router() {
//     const routes = useRoutes([
//         {
//             path: '/',
//             element: <Dashboard />,
//             children: [
//                 { element: <Navigate to="/dashboard" />, index: true },
//                 { path: 'product', element: <ProductPage/> },
//                 { path: 'campaign', element: <Compaigns/> },
//             ],
//         }
//     ]);

//     return routes;
// }
