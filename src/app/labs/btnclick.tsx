'use client'
export const BtnClick = () =>{
  // evento de click chamadno funcao 
  function handleClick(){
    alert('funcionou');
  }
  const avisar = (msg:string)=>{
    alert(msg);
  }

  return(
    <>
      <button onClick={handleClick} className="p-3 m-3 bg-blue-700 text-white rounded-me">clique aqui 1</button>
      <button onClick={()=> avisar('2')} className="p-3 m-3 bg-blue-700 text-white rounded-me">clique aqui 2</button>
      <button onClick={()=> avisar('3')} className="p-3 m-3 bg-blue-700 text-white rounded-me">clique aqui 3</button>

    </>
  );
}