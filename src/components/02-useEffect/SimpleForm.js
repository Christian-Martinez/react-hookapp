import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effect.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  //cargara solo una vez
  useEffect(() => {
    /* console.log('Cargó por primera vez'); */
  }, []);

  useEffect(() => {
    /* console.log('formState cambió'); */
  }, [formState]);

  //util para un selector, combobox
  useEffect(() => {
    /* console.log('email cambió'); */
  }, [email]);

  const handleInputChange = ({ target }) => {
    //console.log(target);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === '123' && <Message />}
    </>
  );
};
