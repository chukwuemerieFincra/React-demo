import { createContext, useState } from "react";

export const UserContext = createContext(null);

const MariaContext = ({ children }) => {
  const [user, setUser] = useState("Maria");
  

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default MariaContext;
