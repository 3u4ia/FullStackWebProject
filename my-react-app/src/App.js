import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './CSS Modules/HomePage.css'
import './CSS Modules/AccountFields.css'

import LogoutPage from "./components/LogoutPage";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import RegistrationForm from "./components/Registration";
import AccountForm from "./components/AccountFields";
import LoginForm from "./components/LoginPage";
import HomeForm from "./components/HomePage";

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn}/>}>
              <Route index element={<HomeForm/>}/>
              {/*can use logical and operator to make sites exist and not exist*/}
              {isLoggedIn &&
              <Route  path="accountFields" element={<AccountForm/>}/>
              }
              {!isLoggedIn &&
              <Route path="loginPage" element={<LoginForm setIsLoggedIn={setIsLoggedIn}/>}/>
              }
              {!isLoggedIn &&
              <Route path="registration" element={<RegistrationForm setIsLoggedIn={setIsLoggedIn}/>}/>
              }
              {isLoggedIn &&
              <Route path="logout" element={<LogoutPage setIsLoggedIn={setIsLoggedIn}/>}/>
              }
              <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
