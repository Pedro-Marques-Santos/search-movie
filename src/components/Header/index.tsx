"use client";

import Image from "next/image";

import logo2 from "../../assets/login/LOGO.svg";

import { FaSearch } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { MdOutlineFormatAlignRight } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";

import {
  Container,
  ContentContainer,
  Icon,
  IconProgessBar,
  Icons,
  ImgIcon,
  Logo,
  MenuXl,
  NavContainer,
  User,
} from "./styles";
import { useContext } from "react";
import { AuthenticationMyUserContext } from "@/context/authenticationUser";

export function Header() {
  const { userGoogle } = useContext(AuthenticationMyUserContext);

  if (userGoogle) {
    console.log(userGoogle.user.photoURL);
  }

  return (
    <ContentContainer>
      {" "}
      <Container>
        <Logo>
          <Image src={logo2} width={155} height={45} alt="logo" />
        </Logo>
        <NavContainer>
          <MenuXl>
            <a href="#">START</a>
            <a href="#">ABOUT</a>
            <a href="#">TELEGRAM</a>
          </MenuXl>
          <Icons>
            <IconProgessBar>
              <MdOutlineFormatAlignRight className="iconHeaderDashboardHeader" />
            </IconProgessBar>
            <Icon>
              {userGoogle ? (
                <ImgIcon style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src={userGoogle.user.photoURL!}
                    alt="perfil"
                    fill={true}
                  />
                </ImgIcon>
              ) : (
                <BsPersonBoundingBox className="iconHeaderDashboardHeader" />
              )}
            </Icon>
            <Icon>
              <BsFillBellFill className="iconHeaderDashboardHeader" />
            </Icon>
            <Icon>
              <FaSearch className="iconHeaderDashboardHeader" />
            </Icon>
          </Icons>
        </NavContainer>
      </Container>
    </ContentContainer>
  );
}
