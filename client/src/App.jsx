// Import Engine
import React from "react";

// Import Engine Routing
import { Routes, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Import Pages
// Import Open Pages
import ForgotPassword from "./pages/open-pages/auth/forgot-password";
import Login from "./pages/open-pages/auth/login/login-page"
import Registration from "./pages/open-pages/auth/registration";
import MainPage from "./pages/open-pages/main-page/main-page";

// Import Private Pages
import AboutPage from "./pages/private-pages/profile/user-profile/about-page"
import UserSettings from "./pages/private-pages/profile/user-settings";
import HomePage from "./pages/private-pages/Home/home-page";
import All from "./pages/private-pages/stock/all";
import Id from "./pages/private-pages/stock/id";

// Import Components

// Create App
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/user-settings" element={<UserSettings />} />
          <Route path="/stock-all" element={<All />} />
          <Route path="/stock-id/:id" element={<Id />} />
        </Routes>
      </div>
    </Provider>
  );
}

// Export App
export default App;
