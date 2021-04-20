import { useState } from "react";

const HolaMundo = ({texto}) => {
  const [newTexto, setNewTexto] = useState(texto)

  return (
    <>
      <h1> Componente Hola Mundo </h1>
      <h2> {newTexto} </h2>
      <input
        placeholder="cambia el texto"
        type="text"
        onChange={ (e) => setNewTexto(e.target.value)}
      />
    </>
  );
};

export default HolaMundo;