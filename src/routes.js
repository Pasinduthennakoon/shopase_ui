import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import ProductListPage from "./pages/ProductListPage/ProductListPage"
import Navigation from "./components/Navigations/Navigation";

export const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <>
        <Navigation />
        <Shop />
      </>
    ),
  },
  {
    path:"/womens",
    element: <ProductListPage />
  }
]);

export default router;