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
import Product1 from "./components/products/product1";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HeroSection />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product1" element={<Product1 />}></Route>
        {/* <Route index element={<Login/>}></Route>
        <Route index element={<Signup/>}></Route>
        <Route index element={<Categories/>}></Route> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
