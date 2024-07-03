import { useState } from "react";
import { reyes } from "./datos/datos";
export default function App() {
  const [rey,setRey]=useState(0)
  
  function handleButton() {
    setRey((prevRey) => (prevRey >= reyes.length - 1 ? 0 : prevRey + 1));
  }
  

  return (
<div className="bg-gray-100 p-4 shadow-md rounded-md">
  <h1 className="text-2xl font-bold mb-2">
    Cena con el rey <span>{rey + 1}</span> <span>{reyes[rey].nombre}</span>
  </h1>

  {reyes[rey].precio > 100 ? (
    <h2 className="text-xl">Precio: <span className="text-red-600">{reyes[rey].precio}</span></h2>
  ) : (
    <div className="mb-2">
      <h2 className="text-xl">Precio: <span className="text-green-600">{reyes[rey].precio}</span></h2>
      <p>Precio Con descuento: <span className="text-green-600">{reyes[rey].precio * 0.90}</span></p>
    </div>
  )}

  {reyes[rey].finDeSemana ? (
    <h3 className="text-lg">Lunes a Viernes</h3>
  ) : (
    <h3 className="text-lg">Solo Fines de semana</h3>
  )}

  <img
    src={`https://www.html6.es/img/rey_${reyes[rey].nombre}.png`}
    alt={`Imagen de ${reyes[rey].nombre}`}
    className="mt-4 rounded-lg"
  />

  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded" onClick={handleButton}>
    Siguiente <span>{rey + 1} / {reyes.length}</span>
  </button>
</div>

  );

}
