import { useState } from "react";
import { UserContext } from "..";

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(null);

  const sair = () => setLogin(null);

  return (
    <UserContext.Provider value={{ login, setLogin, sair }}>
      {children}
    </UserContext.Provider>
  );
};
