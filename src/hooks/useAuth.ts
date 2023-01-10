import { useCallback, useState, useEffect } from "react";

import { useHttp } from "./useHttp";

import { _BASE_URL } from "@config/variables";

interface ILogin {
  email: string;
  password: string;
}

interface IRegister extends ILogin {
  nickname: string;
}

interface IUser {
  id: string;
  nickname: string;
  email: string;
  token: string;
  roles: Array<string>;
}

type IAuthFunction<T> = (form: T) => Promise<void>;

const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const { loading, request, error } = useHttp();

  const storageName = "userData";
  const timeStamp = "timeStamp";

  const login = useCallback(
    async (form: ILogin): Promise<void> => {
      const data = await request(`${_BASE_URL}/auth/login`, "POST", form);
      setUser(data);
      localStorage.setItem(timeStamp, Date.now().toString());
      localStorage.setItem(storageName, JSON.stringify(data));
    },
    [request],
  );

  const register = useCallback(
    async (form: IRegister): Promise<void> => {
      const data = await request(`${_BASE_URL}/auth/registration`, "POST", form);
      setUser(data);
      localStorage.setItem(timeStamp, Date.now().toString());
      localStorage.setItem(storageName, JSON.stringify(data));
    },
    [request],
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const previewsAuthTime = localStorage.getItem(timeStamp);

    let diff = (Date.now() - Number(previewsAuthTime)) / 1000;
    diff /= 60 * 60;
    if (Math.abs(Math.round(diff)) < 24) {
      const data = localStorage.getItem(storageName);
      if (data) {
        setUser(JSON.parse(data));
      }
    } else {
      logout();
    }
  }, [logout]);

  return { user, login, register, logout, loading, error };
};

export default useAuth;

export type { IAuthFunction, IRegister, ILogin, IUser };
