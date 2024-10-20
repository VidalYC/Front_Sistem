import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Chart } from 'react-google-charts';
import '../index.css'; // Asegúrate de importar tu archivo CSS

function GraphPage() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [chartData, setChartData] = useState([['Category', 'Value']]);
  const [chartType, setChartType] = useState('PieChart'); // Estado para el tipo de gráfica

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };

  const handleApply = () => {
    const data = [
      ['Category', 'Value'],
      ...selectedOptions.map((option) => [option, Math.random() * 100]),
    ];
    setChartData(data);
    document.getElementById('options-list').classList.add('hidden'); // Ocultar el menú de opciones
  };

  const options = {
    title: 'Gráfica de Datos',
    is3D: chartType === 'PieChart', // Solo activar 3D para PieChart
    colors: ['rgb(66, 165, 66)', 'rgb(16, 123, 66)', 'rgb(140, 206, 107)', 'rgb(250, 248, 0)', 'rgb(212, 33, 44)', 'rgb(246, 170, 56)', 'rgb(47, 157, 216)', 'rgb(164, 58, 193)'], // Colores de Tailwind
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow p-8 pt-24 pb-32">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Seleccione los datos para la gráfica</h2>
            <div className="mb-4">
              <label htmlFor="chartType" className="block text-sm font-medium text-gray-700 mb-2">Seleccione el tipo de gráfica:</label>
              <select
                id="chartType"
                name="chartType"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                onChange={(e) => setChartType(e.target.value)}
                value={chartType}
              >
                <option value="PieChart">Gráfica de Pastel</option>
                <option value="BarChart">Gráfica de Barras</option>
                <option value="LineChart">Gráfica de Líneas</option>
              </select>
              <hr className="mt-2 border-green-600" /> {/* Línea debajo del selector */}
            </div>
            <div className="relative inline-block text-left mb-4">
              <div className="flex items-center space-x-4"> {/* Alinea los botones horizontalmente */}
                <button
                  type="button"
                  className="inline-flex justify-between rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-green-600 hover:bg-gray-50 focus:outline-none"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => document.getElementById('options-list').classList.toggle('hidden')}
                >
                  Opciones
                  <i className="fas fa-chevron-down ml-2 text-black"></i>
                </button>
                <button
                  className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full flex items-center"
                  onClick={handleApply}
                >
                  Aplicar
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
              <div
                id="options-list"
                className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
              >
                <div className="py-1">
                  <label className="flex items-center px-4 py-2 text-sm text-gray-700">
                    <input type="checkbox" value="Opción 1" onChange={handleCheckboxChange} className="form-checkbox h-4 w-4 text-green-600" />
                    <span className="ml-2">Opción 1</span>
                  </label>
                  <label className="flex items-center px-4 py-2 text-sm text-gray-700">
                    <input type="checkbox" value="Opción 2" onChange={handleCheckboxChange} className="form-checkbox h-4 w-4 text-green-600" />
                    <span className="ml-2">Opción 2</span>
                  </label>
                  <label className="flex items-center px-4 py-2 text-sm text-gray-700">
                    <input type="checkbox" value="Opción 3" onChange={handleCheckboxChange} className="form-checkbox h-4 w-4 text-green-600" />
                    <span className="ml-2">Opción 3</span>
                  </label>
                  <label className="flex items-center px-4 py-2 text-sm text-gray-700">
                    <input type="checkbox" value="Opción 4" onChange={handleCheckboxChange} className="form-checkbox h-4 w-4 text-green-600" />
                    <span className="ml-2">Opción 4</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center chart-container">
            <div className="chart-3d">
              <Chart
                chartType={chartType}
                width="100%"
                height="400px"
                data={chartData}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GraphPage;
