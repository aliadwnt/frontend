// import React from "react";
// import { Helmet } from 'react-helmet';

// export default function App() {
//   return (
//     <>
//       <Helmet>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
//           integrity="..."
//           crossOrigin="anonymous"
//         />

//         <script src="https://cdn.tailwindcss.com"></script>
//       </Helmet>
//     </>
//   );
// }
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';;
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import AdminUser from './pages/admin-user';
import Login from './pages/login';
import Profile from './pages/Profile';
import Analytics from './pages/Analytics';
import Goals from './pages/Goals';
import Transaction from './pages/Transaction';
import LoginAdmin from './pages/LoginAdmin';
import dashboardAdmin from './pages/dashboardAdmin';
import NavbarAdmin from './components/NavbarAdmin';
import LogoutAdmin from './pages/LoginAdmin'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<AdminUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Goals" element={<Goals />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/dashboardAdmin" element={<dashboardAdmin />} />
          <Route path="/NavbarAdmin" element={<NavbarAdmin />} />
          <Route path="/Logout" element={<LoginAdmin />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App;