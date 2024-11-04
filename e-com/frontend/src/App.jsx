import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <>
     <Header/>
     <ToastContainer/>
     <main className='min-h-lvh'>
       <div className="container mx-auto">
        <Outlet/>
       </div>
     </main>
     <Footer/>
    </>
  )
}

export default App