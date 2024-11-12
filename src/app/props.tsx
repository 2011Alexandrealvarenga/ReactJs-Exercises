import { Person } from "@/componentes/Person";

export const ExeProps = () =>{
  return(
    <>
      <Person
      name="Alexandre alvarenga"
      avatar="nome do avatar"
      />
      <hr style={{border: '3px solid blue'}} />
      <Person
      name="jacqueline"
      avatar="nome do avatar 2"
      />
    </>
  )
} 