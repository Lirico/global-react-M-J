import { useReducer } from "react";
import { TYPES } from "@/reducer/actions";
import { reducer } from "@/reducer/reducer";
import { initialState } from "@/reducer/initialState";

// useReducer es un manejador de estados multiple

const Contador2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const decrementar = () => dispatch({type: TYPES.DECREMENTAR})

  const resetear = () => dispatch({type: TYPES.RESETEAR})

  const incrementar = () => dispatch({type: TYPES.INCREMENTAR})

  const mostrar = () => dispatch({type: TYPES.MOSTRAR})

  const ocultar = () => dispatch({type: TYPES.OCULTAR})

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {state.visible && <h3>{state.contador}</h3>}
        <div>
          <button onClick={decrementar} disabled={!state.visible}>
            -
          </button>
          <button onClick={resetear} disabled={!state.visible}>
            0
          </button>
          <button onClick={incrementar} disabled={!state.visible}>
            +
          </button>
          <button onClick={mostrar}>Mostrar</button>
          <button onClick={ocultar}>Ocultar</button>
        </div>
      </div>
    </>
  );
};

export default Contador2;


