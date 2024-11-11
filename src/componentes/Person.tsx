type Props = {
  name: string;
  function: string;
}
export const Person =(Props: Props)=>{

  return(
    <>
      <p>{Props.name}</p>
      <p>{Props.function}</p>
    </>
  )
}