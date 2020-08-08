import React, { useEffect, useState, ReactNode } from "react";
import { auth } from "../../firebase";

import { User } from "types/user";
import { ContextProps } from "types/contextProps";

interface Props {
  children: ReactNode;
}

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user: firebase.User | null) => {
      setUser(user ? { email: user.email ? user.email : "" } : null);
      setLoadingAuthState(false);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
