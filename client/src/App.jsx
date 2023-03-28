import React from "react";
import {Routes, Route} from 'react-router-dom'
import ForgotPassword from "./pages/open-pages/auth/forgot-password";
import Login from "./pages/open-pages/auth/login";
import Registration from "./pages/open-pages/auth/registration";
import MainPage from "./pages/open-pages/main-page";
import UserProfile from "./pages/private-pages/profile/user-profile";
import UserSettings from "./pages/private-pages/profile/user-settings";
import All from "./pages/private-pages/stock/all";
import Id from "./pages/private-pages/stock/id";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/user-settings" element={<UserSettings/>}/>
        <Route path="/stock-all" element={<All/>}/>
        <Route path="/stock-id/:id" element={<Id/>}/>
      </Routes>
    </div>
  );
}

export default App;
