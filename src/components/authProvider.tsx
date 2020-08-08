import React, { useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase";

import { Login } from "types/login";

type ContextProps = {
  user: Login | null;
  authenticated: boolean;
  setUser: (login: Login | null) => void;
  loadingAuthState: boolean;
};

interface Props {
  children: ReactNode;
}

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<Login | null>(null);
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
