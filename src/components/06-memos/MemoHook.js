import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effect.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(300);
  const [show, setShow] = useState(true);

  //en la vida real esto estaria dentro de un helper
  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log('Ahí vamos....');
    }
    return `${iteraciones} iteraciones realizadas.`;
  };

  //si el counter no cambia no se ejecuta el procesoPesado
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>

      <button
        className='btn btn-outline-primary ms-3'
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
