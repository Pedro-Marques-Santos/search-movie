import Image from "next/image";

import logo from "../../assets/logo/logoteste.png";

import logo2 from "../../assets/login/LOGO.svg";

import { FaSearch } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { MdOutlineFormatAlignRight } from "react-icons/md";

import {
  Container,
  Icon,
  IconProgessBar,
  Icons,
  Logo,
  MenuXl,
  NavContainer,
  User,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        <Image src={logo2} width={155} height={45} alt="logo" />
      </Logo>
      <NavContainer>
        <MenuXl>
          <a href="#">START</a>
          <a href="#">COMMUNITY</a>
          <a href="#">TELEGRAM</a>
        </MenuXl>
        <Icons>
          <IconProgessBar>
            <MdOutlineFormatAlignRight size={25} />
          </IconProgessBar>
          <Icon>
            <User />
          </Icon>
          <Icon>
            <BsFillBellFill size={20} />
          </Icon>
          <Icon>
            <FaSearch size={20} />
          </Icon>
        </Icons>
      </NavContainer>
    </Container>
  );
}
