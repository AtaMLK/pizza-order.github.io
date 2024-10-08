import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Error from "./UI/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/Cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction} from "./features/order/updateOrder"
import CreateOrder, {
  action as createOrderLoader,
} from "./features/order/CreateOrder";
import AppLayout from "./UI/AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderLoader,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action :updateOrderAction
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
