import { Container, Exit, ImgIcon, User } from "./styles";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { ImExit } from "react-icons/im";

import { BsPersonBoundingBox } from "react-icons/bs";
import { useContext } from "react";
import { AuthenticationMyUserContext } from "@/context/authenticationUser";

export function FooterNavBarMenu() {
  const router = useRouter();
  const { userGoogle } = useContext(AuthenticationMyUserContext);

  function goPageLogin() {
    router.push("/");
  }

  return (
    <Container>
      <Exit>
        <ImExit
          size={23}
          style={{ color: "var(--white-200)" }}
          onClick={goPageLogin}
        />
      </Exit>
      <User>
        {userGoogle ? (
          <ImgIcon style={{ position: "relative", overflow: "hidden" }}>
            <Image src={userGoogle.user.photoURL!} alt="perfil" fill={true} />
          </ImgIcon>
        ) : (
          <BsPersonBoundingBox
            style={{ color: "var(--white-200)" }}
            onClick={goPageLogin}
            className="iconHeaderDashboardHeader"
          />
        )}
      </User>
    </Container>
  );
}
