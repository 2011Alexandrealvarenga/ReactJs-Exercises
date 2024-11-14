// https://alunos.b7web.com.br/curso/reactjs/react-arrays-em-states-exibir
// listar itens
'use client'

import { useState } from "react";

export const ListaTarefas = () =>{
  
  type TodoItem ={
    label: string;
    checked: boolean;
  }

  // adiciona itens em um array
  const handleAddButton = () =>{
    // verifica se foi digitado alguma coisa
    if(itemInput.trim() === '') return;

    setList([
      ...list,
      {label:itemInput, checked: false}
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

  // marcando com checkbox
  const toggleItem = (index:number) =>{
    let newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  }

  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]> ([
    {label: "fazer dever de casa", checked: true},
    {label: "levar o lixo", checked: false}

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
              <li key={index} className="flex mb-3">
                <input onClick={()=> toggleItem(index)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3" />
                {item.label} - <button onClick={()=> deleteItem(index)} className="hover:underline">[Deletar]</button></li>
            ))
          }
        </ul>
      </div>
    </>
  )
}