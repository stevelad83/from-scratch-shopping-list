const { createContext, useState } = require('react');

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, SetUser] = useState(null);

  return <UserContext.Provider value={{ user, SetUser }}>{children}</UserContext.Provider>;
};

export { UserProvider };
