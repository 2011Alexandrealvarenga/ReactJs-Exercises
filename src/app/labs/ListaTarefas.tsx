// https://alunos.b7web.com.br/curso/reactjs/react-arrays-em-states-exibir
// listar itens
'use client'

import { useState } from "react";

export const ListaTarefas = () =>{
  
  type TodoItem ={
    label: string;
    cheched: boolean;
  }

  // adiciona itens em um array
  const handleAddButton = () =>{
    // verifica se foi digitado alguma coisa
    if(itemInput.trim() === '') return;

    setList([
      ...list,
      {label:itemInput, cheched: false}
    ])

    // limpa o que foi digitado
    setItemInput('');
  }

  // deleta o item em uma lista
  const deleteItem = (index: number) =>{
    setList(
      list.filter((item, key) => key !== index)
    )
  }

  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]> ([
    {label: "fazer dever de casa", cheched: false},
    {label: "levar o lixo", cheched: false}

  ]);
  return(
    <>
      <div className="w-screen h-screen flex flex-col items-center">
        <h1 className="mt-5">Lista de Tarefas</h1>
        <div className="flex col-span-3">
          <input 
            type="text"
            placeholder="O que deseja fazer?"
            className="flex-1 border border-black p-2"
            value={itemInput}
            onChange={e => setItemInput(e.target.value)}
           />
           <button onClick={handleAddButton} className="bg-black text-white p-2 m-2">Adicionar</button>
        </div>
        <p className="m-5">{list.length} Itens na lista</p>
        <ul className="list-disc">
          {
            list.map((item, index)=>(
              <li key={index}>{item.label} - <button onClick={()=> deleteItem(index)} className="hover:underline">[Deletar]</button></li>
            ))
          }
        </ul>
      </div>
    </>
  )
}