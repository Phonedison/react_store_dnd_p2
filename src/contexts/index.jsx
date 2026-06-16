import { createContext, useContext } from "react";

// Passagem de tipo de usuário para o navbar
export const UserContext = createContext(null);
export const useType = () => useContext(UserContext);
