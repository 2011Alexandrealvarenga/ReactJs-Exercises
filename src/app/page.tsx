import {Square, Circle} from "@/componentes/square";
import { Person } from "@/componentes/Person";

function Page(){
  return(
    <div >

      <h1>ola mundo</h1>
      <hr style={{border: '3px solid blue'}} />
      
      <Person
        name="Alexandre"
        avatar="nome do avatar"
      />
      <hr style={{border: '3px solid blue'}} />
      <Person
        name="jacqueline"
        avatar="nome do avatar 2"
      />
    </div>
  );
}
export default Page;