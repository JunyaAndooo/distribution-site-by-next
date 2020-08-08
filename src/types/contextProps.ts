import { User } from "types/user";

export type ContextProps = {
  user: User | null;
  authenticated: boolean;
  setUser: (user: User | null) => void;
  loadingAuthState: boolean;
};
