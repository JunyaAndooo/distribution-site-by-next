import { User } from "types/user";

export type ContextProps = {
  user: User | null;
  authenticated: boolean;
  setUser: (login: User | null) => void;
  loadingAuthState: boolean;
};
