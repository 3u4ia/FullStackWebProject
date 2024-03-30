import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './CSS Modules/HomePage.css'

import ErrorPage from "./components/ErrorPage";
import LayoutObj from "./components/Layout";
import RegistrationForm from "./components/Registration";
import AccountForm from "./components/AccountFields";
import LoginForm from "./components/LoginPage";
import HomeForm from "./components/HomePage";




function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutObj/>}>
              <Route index element={<HomeForm/>}/>
              <Route  path="accountFields" element={<AccountForm/>}/>
              <Route path="loginPage" element={<LoginForm/>}/>
              <Route path="registration" element={<RegistrationForm/>}/>
              <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
