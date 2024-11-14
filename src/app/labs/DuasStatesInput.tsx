import { useState } from "react";
export const DuasStatesInput = () => {
  
  type Person ={
    name: string;
    lastName: string;
  }
  // limpar campos
  const limparTudo = () =>{
    setFullName({name: '', lastName: ''})
  }

  // usando duas states e juntando valores de input e limpar campos
  const [fullName, setFullName] = useState<Person>({name: 'ale', lastName: 'alvarenga'});
  return(
    <>
    <div>
      <input 
        type="text"
        placeholder="Nome"
        className="border border-black m-3"
        name={fullName.name}
        onChange={e => setFullName({...fullName, name:e.target.value})}
      />
      <input 
        type="text"
        placeholder="Sobrenome"
        className="border border-black m-3"
        name={fullName.lastName}
        onChange={e => setFullName({...fullName, lastName:e.target.value})}
      />
      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>
      <button onClick={limparTudo} className="border border-black p-3 mt-2">Limpar tudo</button>
    </div>
    </>
  );
}