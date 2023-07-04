import { Close, Container, Logo } from "./styles";

import { AiFillCloseCircle } from "react-icons/ai";

import Image from "next/image";

import logo2 from "../../../assets/login/LOGO.svg";

interface ILogoAndCloseNavBarMenu {
  openAndCloseNavBarMenu: () => void;
}

export function LogoAndCloseNavBarMenu({
  openAndCloseNavBarMenu,
}: ILogoAndCloseNavBarMenu) {
  return (
    <Container>
      <Logo>
        <Image src={logo2} width={155} height={45} alt="logo" />
      </Logo>
      <Close onClick={openAndCloseNavBarMenu}>
        <AiFillCloseCircle size={24} style={{ color: "var(--white-200)" }} />
      </Close>
    </Container>
  );
}
