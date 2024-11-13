"use client"
import { BotaoProps } from "./labs/BotaoProps";

// apri
const Page = () =>{
  const clicandoBotao1 = () => alert('botao 1');
  const clicandoBotao2 = () => alert('botao 2');

  return(
    <div >    
      <BotaoProps label="botao 1" onClick={clicandoBotao1} />
      <BotaoProps label="botao 2" onClick={clicandoBotao2} />
    </div>
  );
}
export default Page;