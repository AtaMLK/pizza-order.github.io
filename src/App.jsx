import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, { Loader as MenuLoader } from './UI/Home';
import Menu from './features/menu/Menu';
import Cart from './features/Cart/Cart';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import AppLAyout from './UI/AppLAyout';
const router = createBrowserRouter([
  {
    element: <AppLAyout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/menu', element: <Menu />, Loader: MenuLoader },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      { path: '/order/:orderId', element: <Order /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
