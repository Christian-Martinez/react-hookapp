import React from 'react';

//memoriza el prop value
export const Small = React.memo(({ value }) => {
  console.log(' Me volví a llamar :(  ');
  // http? ej se volveria a llamar al api generando muchas peticiones
  return <small> {value} </small>;
});
