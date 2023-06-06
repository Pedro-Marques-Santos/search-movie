"use client";
import { UserCredential } from "firebase/auth";
import { createContext, ReactNode, useState } from "react";

interface IUser {
  id: string;
  recommend: string[];
}

interface IResponseUserAndStatus {
  user: IUser;
  status: number;
}

interface AuthenticationMyUserProviderProps {
  children: ReactNode;
}

type TAuthenticationMyUserContextProps = {
  verifyToken(result: UserCredential): Promise<Response>;
  searchOrCreateUser(id: string): Promise<IResponseUserAndStatus>;
  userProfile: { id: string; recommend: string[] };
};

export const AuthenticationMyUserContext =
  createContext<TAuthenticationMyUserContextProps>(
    {} as TAuthenticationMyUserContextProps
  );

export function AuthenticationMyUserProvider({
  children,
}: AuthenticationMyUserProviderProps) {
  const [userProfile, setUserProfile] = useState({
    id: "",
    recommend: [] as string[],
  });

  async function verifyToken(result: UserCredential): Promise<Response> {
    const response = await fetch(
      "http://localhost:9999/verifyGoogleAuthentication",
      {
        method: "POST",
        headers: new Headers({
          Authorization: "Bearer " + result.user.accessToken,
          "Content-type": "application/json; charset=UTF-8",
        }),
      }
    );
    return response;
  }

  async function searchOrCreateUser(
    id: string
  ): Promise<IResponseUserAndStatus> {
    const data = {
      id: id,
    };

    const response = await fetch("http://localhost:9999/createuser", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const user = (await response.json()).user as IUser;

    const userAndResponseStatus = {
      user: user,
      status: response.status,
    } as IResponseUserAndStatus;

    setUserProfile({
      id: user.id,
      recommend: user.recommend,
    });

    return userAndResponseStatus;
  }

  console.log(userProfile);

  return (
    <AuthenticationMyUserContext.Provider
      value={{ verifyToken, searchOrCreateUser, userProfile }}
    >
      {children}
    </AuthenticationMyUserContext.Provider>
  );
}
