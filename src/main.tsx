import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
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
