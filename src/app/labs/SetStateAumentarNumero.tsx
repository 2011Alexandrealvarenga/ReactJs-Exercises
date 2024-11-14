"use client"
import { useState } from "react";

// usando state, evento de atualizaçaõ de tela só na tag especifica
export const SetStateAumentarNumero = () =>{
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount(count + 1);
  }
  return(
    <>
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-blue-500 p-3 white">+1</button>
    </>
  )
}