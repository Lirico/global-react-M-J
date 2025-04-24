import { useState, useEffect } from "react";

const RelojEffect = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if(visible){
        temporizador = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);
    }

    return () => clearInterval(temporizador)
  }, [visible])
  

  const mostrar = () => setVisible(true);
  const ocultar = () => setVisible(false);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible && <h3>{hora}</h3>}
      <button onClick={mostrar}>Iniciar</button>
      <button onClick={ocultar}>Detener</button>
    </>
  );
};

export default RelojEffect;
