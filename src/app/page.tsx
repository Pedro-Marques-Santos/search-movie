"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

import logo from "../assets/login/LOGO.svg";
import login from "../assets/login/LOGIN.svg";
import { auth } from "../services/firebase";
import { AiFillGoogleCircle } from "react-icons/ai";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthenticationMyUserContext } from "@/context/authenticationUser";

export default function Home() {
  const router = useRouter();

  const { verifyToken, searchOrCreateUser } = useContext(
    AuthenticationMyUserContext
  );

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        const response = await verifyToken(result);

        if (response.status === 201) {
          const userAndResponseStatus = await searchOrCreateUser(
            result.user.uid
          );

          if (userAndResponseStatus.status === 200) {
            if (userAndResponseStatus.user.recommend?.length !== 3) {
              router.push("/recommendprofile");
            }
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="flex h-screen justify-center items-center flex-col pl-2 pr-2 bg-my-black-700">
      <div className="w-full max-w-md">
        <Image
          className="mb-8"
          src={logo}
          width={126}
          height={30}
          alt={"logo"}
          priority
        />
        <Image src={login} width={190} height={96} alt={"login"} priority />
        <button
          onClick={handleGoogleSignIn}
          className="w-full h-12 bg-red-800 hover:bg-red-900 text-lg mt-3 flex justify-center items-center text-white"
        >
          <AiFillGoogleCircle className="mr-2 text-2xl" />
          GOOGLE
        </button>
      </div>
    </div>
  );
}
