import { FormEvent } from "react"

export const PrevEnvForm = () =>{
  // previnindo o envio do formulario preventdefault
  const handleFormSubmit=(event: FormEvent) =>{
    event.preventDefault();
    alert('Enviando ...');
  }

  return(
    <>
    <div className="">

      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
    </>
  )
}