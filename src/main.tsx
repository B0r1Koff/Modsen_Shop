import { StrictMode, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { store } from './store/store';
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "Shop",
        element: <Shop/>,
      },
      {
        path: "Cart",
        element: <Cart/>,
      },
      {
        path: "",
        element: <Home/>,
      },
    ]
  }
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
