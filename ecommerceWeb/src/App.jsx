import { useState } from "react";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import Cart from "./pages/Cart";
import HeroSection from "./pages/HeroSection";
import Product1 from "./layout/product1";
import NotFound from "./pages/Notfound";
import AdminPage from "./pages/AdminPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HeroSection />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='product1' element={<Product1 />}>
          <Route path='fashion' element={<Product1 />}></Route>
          <Route path='home&kitchen' element={<Product1 />}></Route>
          <Route path='electronics' element={<Product1 />}></Route>
          <Route path='beauty&health' element={<Product1 />}></Route>
          <Route path='toys&games' element={<Product1 />}></Route>




        </Route>
        {/* <Route path='/fashion' element={<Fashion/>}></Route>
        <Route path='/home&kitchen' element={<HomeAndKitchen/>}></Route>
        <Route path='/electronics' element={<Electronics/>}></Route>
        <Route path='/beauty&health' element={<HealthAndBeauty/>}></Route>
        <Route path='/toys&games' element={<ToyAndGames/>}></Route> */}
        {/* <Route index element={<Login/>}></Route>
        <Route index element={<Signup/>}></Route>
        <Route index element={<Categories/>}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
