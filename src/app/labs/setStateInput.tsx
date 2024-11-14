import { useState } from "react";

export const InputForm = () =>{
  const [nameInput, setNameInput] = useState('');

  // clique do botao
  const handleBtnClick = () =>{
    alert(nameInput)
  }
  // trabalha com o valor inserido no input, usando state ele precisa ser tratado
  
  return (
    <>
      <div className="bg-blue-700 p-3">
    
        <input 

        type="text"
        className="border border-black p-3 text-black "
        placeholder="Digite valor"
        value={nameInput}
        onChange={ e => setNameInput (e.target.value)}
        />
        <p className="text-white">O Valor digitado é: {nameInput}</p>
        <button onClick={handleBtnClick} className="handleBtnClick text-white p-3 border m-3">Mostrar o valor</button>
      </div>
    </>
  )
}