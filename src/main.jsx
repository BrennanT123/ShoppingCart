import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import './index.css';

import App from './App.jsx';
import Products from './products.jsx';
import Cart from './cart.jsx';
import { StoreProvider } from './storeContext.jsx';

// Layout that wraps all routes in StoreProvider
const StoreLayout = () => (
  <StoreProvider>
    <Outlet />
  </StoreProvider>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
