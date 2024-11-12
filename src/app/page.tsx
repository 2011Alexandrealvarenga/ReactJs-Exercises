import { ExeProps } from "./props";
import { Card } from "./Card";
function Page(){
  return(
    <div >    
      <Card>
        <>
          <h4>Titulo do card</h4>
          <p className="text-sm text-right">- Descricao do card</p>
        </>
      </Card>
    </div>
  );
}
export default Page;