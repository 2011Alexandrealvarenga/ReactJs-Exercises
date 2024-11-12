import { ExeProps } from "./props";
import { Card } from "./Card";
function Page(){
  return(
    <div >    
      <Card phrase="Alguma frase top" author="alguem que fez"></Card>
      <Card phrase="Alguma frase top" ></Card>
    </div>
  );
}
export default Page;