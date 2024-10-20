import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card'; // Importa el componente Card
import graphImage from '../assets/upc.jpg'; // Imagen para una tarjeta
import timeImage from '../assets/upc.jpg'; // Imagen para otra tarjeta
import analysisImage from '../assets/upc.jpg'; // Imagen para otra tarjeta

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-cover bg-center min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-8 pt-24 pb-32">
        <section className="mb-16 p-6 rounded text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido</h1>
          <p className="mb-4">Bienvenido a nuestra Aplicación de Visualización de Datos, desarrollada especialmente para la Universidad Popular del Cesar. Esta herramienta está diseñada para simplificar el proceso de análisis y visualización de datos, permitiéndote cargar archivos Excel y convertirlos en gráficas interactivas y fáciles de interpretar.</p>
          <Button onClick={() => navigate('/graph')} className="mt-4">Comenzar</Button>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="¿Qué Puedes Esperar?" image={graphImage}>
            <ul className="list-disc list-inside mb-4 text-left">
              <li>Carga Sencilla de Archivos: Con solo unos pocos clics, puedes subir tus archivos Excel directamente a la aplicación.</li>
              <li>Selección Personalizada de Datos: Usa nuestras opciones de selección para escoger exactamente qué datos quieres visualizar.</li>
              <li>Gráficas Interactivas: Transforma tus datos en gráficas interactivas que te permitirán obtener insights valiosos de manera rápida y eficiente.</li>
            </ul>
          </Card>

          <Card title="¿Por Qué Usar Esta Aplicación?" image={timeImage}>
            <ul className="list-disc list-inside mb-4 text-left">
              <li>Ahorrar Tiempo: Automatiza el proceso de creación de gráficas, eliminando la necesidad de hacerlo manualmente.</li>
              <li>Mejorar el Análisis de Datos: Visualiza tus datos de una manera clara y precisa, lo que facilita la identificación de tendencias y patrones.</li>
              <li>Fomentar la Colaboración: Comparte tus gráficos con compañeros y profesores para una colaboración más efectiva.</li>
            </ul>
          </Card>

          <Card title="¿Cómo Funciona?" image={analysisImage}>
            <ol className="list-decimal list-inside mb-4 text-left">
              <li>Sube tu Archivo Excel: Utiliza el botón de carga para subir tu archivo Excel.</li>
              <li>Selecciona los Datos: Marca las casillas correspondientes a los datos que quieres incluir en la gráfica.</li>
              <li>Genera tu Gráfica: Con un solo clic, la aplicación procesará tus datos y generará una gráfica interactiva.</li>
            </ol>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
