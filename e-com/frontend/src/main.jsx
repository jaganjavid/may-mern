import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route,
} from "react-router-dom";
import HomeScreen from './pages/HomeScreen.jsx';
import CartScreen from "./pages/CardScreen.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import ProductScreen from './pages/ProductScreen.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<App />}>
         <Route index={true} path='/' element={<HomeScreen />} />
         <Route path='/cart' element={<CartScreen />} />
         <Route path='/login' element={<LoginScreen />} />
         <Route path='/product/:id' element={<ProductScreen />} />
      </Route>
   )
)

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <RouterProvider router={router}>
         <App />
      </RouterProvider>
   </Provider>
)
