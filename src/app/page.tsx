import {Square, Circle} from "@/componentes/square";
import { Person } from "@/componentes/Person";

function Page(){
  return(
    <div >

      <h1>ola mundo</h1>
      <hr style={{border: '3px solid blue'}} />
      <Person 
        name="Alexandre Alvarenga"
        function="programador"
      
      />
        <hr style={{border: '3px solid blue'}} />
      <Person 
        name="Bruno Fernandes Alvarenga"
        function="Desenvolvedor"
      
      />
    </div>
  );
}
export default Page;