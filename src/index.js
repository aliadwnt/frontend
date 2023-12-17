import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import AdminUser from './pages/admin-user';
import Login from './pages/login';
import Profile from './pages/Profile';
import Analytics from './pages/Analytics';
import Goals from './pages/Goals';
import Transaction from './pages/Transaction';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/home" element={<Dashboard />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/users" element={<AdminUser />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Profile" element={<Profile/>} />
    <Route path="/Analytics" element={<Analytics/>} />
    <Route path="/Goals" element={<Goals/>} />
    <Route path="/Transaction" element={<Transaction/>} /> 

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Not Found</p>
            </main>
          }
        />
  </Routes>
</BrowserRouter>
);
