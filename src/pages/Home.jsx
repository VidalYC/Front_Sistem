import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Importa el componente Footer
import background from '../assets/fondo.jpg'; // Importa la imagen

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-cover bg-center min-h-screen pt-16 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Header />
      <div className="text-center bg-white bg-opacity-80 p-8 rounded relative">
        <h1 className="text-4xl font-bold mb-8">Bienvenido</h1>
        <Button onClick={() => navigate('/graph')}>Clic aquí</Button>
      </div>
      <Footer /> {/* Usa el componente Footer */}
    </div>
  );
}

export default Home;
