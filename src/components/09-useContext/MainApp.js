import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* todo lo que esta aqui adentro podra acceder a los datos de value */}
      <AppRouter />
    </UserContext.Provider>
  );
};
