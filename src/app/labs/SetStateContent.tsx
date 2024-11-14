"use client"
import { useState } from "react";

// usando state, mostrando e ocultando area
export const SetStateContent = () =>{
  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    // toggle
    setShowSecret(!showSecret);
  }
  return(
    <>
      <button onClick={handleClickButton} className="bg-blue-500 p-3 white">{showSecret ? 'Ocultar' : 'Mostrar'}</button>
      {
        showSecret &&
      <div className="p-3 bg-blue-700 m-3">Area secreta</div>
      }
    </>
  )
}