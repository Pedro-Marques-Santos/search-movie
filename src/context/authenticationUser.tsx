"use client";
import { UserCredential } from "firebase/auth";
import { createContext, ReactNode, useState } from "react";

interface IUser {
  id: string;
  recommend: string[];
}

interface IResponseStatus {
  status: number;
}

interface AuthenticationMyUserProviderProps {
  children: ReactNode;
}

type TAuthenticationMyUserContextProps = {
  verifyToken(result: UserCredential): Promise<Response>;
  searchOrCreateUser(id: string): Promise<IResponseStatus>;
  userProfile: { id: string; recommend: string[] };
  modifyUserAddGenres({ id, recommend }: IUser): Promise<IResponseStatus>;
  userGoogle: UserCredential | null;
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

  const [userGoogle, setUserGoogle] = useState<UserCredential | null>(null);

  async function verifyToken(result: UserCredential): Promise<Response> {
    const response = await fetch(
      "http://localhost:9999/verifyGoogleAuthentication",
      {
        method: "POST",
        headers: new Headers({
          Authorization: "Bearer " + result.user?.accessToken,
          "Content-type": "application/json; charset=UTF-8",
        }),
      }
    );

    setUserGoogle(result);

    return response;
  }

  async function searchOrCreateUser(id: string): Promise<IResponseStatus> {
    const data = {
      id: id,
    };

    const response = await fetch("http://localhost:9999/createuser", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const user = (await response.json()).user as IUser;

    const responseStatus = {
      status: response.status,
    } as IResponseStatus;

    setUserProfile({
      id: user.id,
      recommend: user.recommend,
    });

    return responseStatus;
  }

  async function modifyUserAddGenres({
    id,
    recommend,
  }: IUser): Promise<IResponseStatus> {
    const data = {
      id: id,
      recommend: recommend,
    };

    const response = await fetch(
      "http://localhost:9999/modifyUserAddRecommend",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );

    const user = (await response.json()) as IUser;

    const responseStatus = {
      status: response.status,
    } as IResponseStatus;

    setUserProfile({
      id: user.id,
      recommend: user.recommend,
    });

    return responseStatus;
  }

  return (
    <AuthenticationMyUserContext.Provider
      value={{
        verifyToken,
        searchOrCreateUser,
        userProfile,
        modifyUserAddGenres,
        userGoogle,
      }}
    >
      {children}
    </AuthenticationMyUserContext.Provider>
  );
}
