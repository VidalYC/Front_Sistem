// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChartPage from './pages/ChartPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />  {/* Barra de navegación para todas las páginas */}
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Ruta para el Home */}
        <Route path="/login" element={<LoginPage />} />  {/* Ruta para Login */}
        <Route path="/register" element={<RegisterPage />} />  {/* Ruta para Registro */}
        <Route path="/chart" element={<ChartPage />} />  {/* Ruta para la gráfica interactiva */}
      </Routes>
    </Router>
  );
}

export default App;
