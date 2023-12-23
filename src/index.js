// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from './pages/dashboard';
// import Signup from './pages/signup';
// import AdminUser from './pages/admin-user';
// import Login from './pages/login';
// import Profile from './pages/Profile';
// import Analytics from './pages/Analytics';
// import Goals from './pages/Goals';
// import Transaction from './pages/Transaction';
// import LoginAdmin from './pages/LoginAdmin';
// import dashboardAdmin from './pages/dashboardAdmin';
// import NavbarAdmin from './components/NavbarAdmin';
// import LogoutAdmin from './pages/LoginAdmin'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//   <Routes>
//     <Route path="/" element={<Dashboard />} />
//     <Route path="/home" element={<Dashboard />} />
//     <Route path="/signup" element={<Signup />} />
//     <Route path="/users" element={<AdminUser />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/Profile" element={<Profile/>} />
//     <Route path="/Analytics" element={<Analytics/>} />
//     <Route path="/Goals" element={<Goals/>} />
//     <Route path="/Transaction" element={<Transaction/>} /> 
//     <Route path="/LoginAdmin" element={<LoginAdmin/>} /> 
//     <Route path="/dashboardAdmin" element={<dashboardAdmin/>} /> 
//     <Route path="/NavbarAdmin" element={<NavbarAdmin/>} /> 
//     <Route path="/Logout" element={<LoginAdmin/>} /> 


//         <Route
//           path="*"
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p>Not Found</p>
//             </main>
//           }
//         />
//   </Routes>
// </Router>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();