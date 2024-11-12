import { peopleList } from "@/data/peopleList";
const Listagem = () =>{
  return(
    <div >    
      {/* exibe uma lista de itens de um arquivo externo */}
      {
        peopleList.length > 0 &&
        <ul>
          {peopleList.map(person =>
            <li>{person.name}</li>
          )}
        </ul>
      }
      
    </div>
  );
}
export default Listagem;