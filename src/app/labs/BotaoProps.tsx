// aproveitando a estrutura para repeticao chamando uma funcao 
type Props ={
  label: string;
  onClick: () => void;
}
export const BotaoProps = ({label, onClick}: Props) => {
  return (
    <button onClick={onClick} className="bg-blue-700 text-white p-3 m-2">{label}</button>
  )
}