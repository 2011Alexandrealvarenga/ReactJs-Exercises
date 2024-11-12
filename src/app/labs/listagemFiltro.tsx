import { peopleList } from "@/data/peopleList";
const ListagemFiltro = () =>{
  const quimico = peopleList.filter(person => person.profession === 'Quimico');
  return(
    <div >    
      {/* exibe uma lista de itens de um arquivo externo com filtro */}
      {
        quimico.length > 0 &&
        <ul>
          {quimico.map(person =>
            <li>{person.name}</li>
          )}
        </ul>
      }
      
    </div>
  );
}
export default ListagemFiltro;