"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "../assets/login/LOGO.svg";
import login from "../assets/login/LOGIN.svg";
import { auth } from "../services/firebase";
import { AiFillGoogleCircle } from "react-icons/ai";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { Container, ContentContainer, Icon, Img } from "./login/styles";
import { GifCenter } from "@/components/Gif/GifCenter";

export default function Home() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const router = useRouter();

  const { verifyToken, searchOrCreateUser, userProfile } = useContext(
    AuthenticationMyUserContext
  );

  const [stateLoadingLogin, setStateLoadingLogin] = useState(false);

  function handleGoogleSignIn() {
    setIsButtonDisabled(true);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        setStateLoadingLogin(true);
        const response = await verifyToken(result);
        console.log((await result.user.getIdToken()).toString());
        if (response.status === 201) {
          const userAndResponseStatus = await searchOrCreateUser(
            result.user.uid
          );
        }
      })
      .catch((e) => {
        console.log(e);
        setStateLoadingLogin(false);
        setIsButtonDisabled(false);
      });
  }

  function goPageDashboard() {
    setStateLoadingLogin(true);
    router.push("/dashboard");
  }

  useEffect(() => {
    if (userProfile.id !== "" && userProfile.id) {
      if (userProfile.recommend.length === 3) {
        router.push("/dashboard");
      }
      if (userProfile.recommend.length !== 3) {
        router.push("/recommendprofile");
      }
    }
  }, [router, userProfile.id, userProfile.recommend.length]);

  return (
    <ContentContainer>
      <Container>
        <Img>
          <Image
            className="mb-8"
            src={logo}
            width={126}
            height={30}
            alt={"logo"}
            priority
          />
        </Img>
        <Image src={login} width={190} height={96} alt={"login"} priority />
        <button onClick={handleGoogleSignIn} disabled={isButtonDisabled}>
          <Icon>
            <AiFillGoogleCircle />
          </Icon>
          GOOGLE
        </button>
        <h6 onClick={goPageDashboard}>anonymous login</h6>
      </Container>
      {stateLoadingLogin ? (
        <GifCenter top="70%" width={"38px"} height={"38px"} />
      ) : (
        <></>
      )}
    </ContentContainer>
  );
}
