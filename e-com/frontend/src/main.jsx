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

import LoginScreen from "./pages/LoginScreen.jsx";
import ProductScreen from './pages/ProductScreen.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';
import CartScreen from './pages/CartScreen.jsx';
import ShippingScreen from './pages/ShippingScreen.jsx';
import ProfileScreen from './pages/ProfileScreen.jsx';




const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<App />}>
         <Route index={true} path='/' element={<HomeScreen />} />
         <Route path='/cart' element={<CartScreen />} />
         <Route path='/login' element={<LoginScreen />} />
         <Route path='/product/:id' element={<ProductScreen />} />
         <Route path='/shipping' element={<ShippingScreen />} />
         <Route path='/profile' element={<ProfileScreen />} />
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
