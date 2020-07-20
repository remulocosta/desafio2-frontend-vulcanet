import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface IUser {
  name: string;
  user: string;
  password: string | null;
  company: string;
  photo: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@VulcaNet:token');
    const user = localStorage.getItem('@VulcaNet:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, senha: password }) => {
    const requestData = await await api.get(`/user?user=${email}`);
    const { name, user, company, photo } = requestData.data;

    const usuario = { name, user, password, company, photo };

    if (usuario.user !== email || usuario.password !== password) {
      throw new Error('Usuario ou senha inválidos');
    }

    usuario.password = null;
    const token = 'token-request';

    localStorage.setItem('@VulcaNet:token', token);
    localStorage.setItem('@VulcaNet:user', JSON.stringify(usuario));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user: usuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@VulcaNet:token');
    localStorage.removeItem('@VulcaNet:user');

    setData({} as IAuthState);
  }, []);

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem('@VulcaNet:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
