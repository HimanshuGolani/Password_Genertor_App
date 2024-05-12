import React, {createContext, useContext, useState} from 'react';

const PasswordContext = createContext();

const PasswordFieldsProvider = ({children}) => {
  const [length, setLength] = useState(0);
  const [is1, setIs1] = useState(false);
  const [is2, setIs2] = useState(false);
  const [is3, setIs3] = useState(false);
  const [is4, setIs4] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <PasswordContext.Provider
      value={{
        length,
        setLength,
        is1,
        setIs1,
        is2,
        setIs2,
        is3,
        setIs3,
        is4,
        setIs4,
        password,
        setPassword,
      }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordFieldsState = () => {
  return useContext(PasswordContext);
};

export default PasswordFieldsProvider;
