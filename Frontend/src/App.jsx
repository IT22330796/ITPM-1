import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Header from './Components/Header';
import DashBoard from './Pages/DashBoard';
import PrivateRoute from './Components/PrivateRoute';
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute';
import AddItinary from './Pages/AddItinary';
import Itinerary from './Pages/Itinerary';
import UpdateItinerary from './Pages/UpdateItinerary';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path ="/itinerary" element={<Itinerary/>}/>
       

        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<DashBoard/>}/>
         
        </Route>

        <Route element={<OnlyAdminPrivateRoute/>}>
        <Route path="/addItinary" element={<AddItinary/>}/>
        <Route path="//update-itinerary/:id" element={<UpdateItinerary/>}/>
         
        </Route>

      </Routes>


     


    </BrowserRouter>
  )
}
