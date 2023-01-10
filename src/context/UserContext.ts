import { createContext } from "react";
import { IAuthFunction, ILogin, IRegister, IUser } from "@hooks/useAuth";

interface IUserContext {
  user: IUser | null;
  login: IAuthFunction<ILogin> | null;
  register: IAuthFunction<IRegister> | null;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const noop = () => null;

const UserContext = createContext<IUserContext>({
  user: null,
  login: null,
  register: null,
  logout: noop,
  loading: false,
  error: null,
});

export default UserContext;
