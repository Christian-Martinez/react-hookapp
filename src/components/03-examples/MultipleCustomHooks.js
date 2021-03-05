import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  //si data es null, !data es true y !!data llega a ser false
  //aqui quiere decir que si existe la data extrae el valor de la posicion 0
  const { author, quote } = !!data && data[0];

  //console.log(author, quote);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-4'> {quote} </p>
          <footer className='blockquote-footer'> {author} </footer>
        </blockquote>
      )}

      <button className='btn btn-primary' onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};
