"use client";

import Image from "next/image";
import Link from "next/link";
import logo2 from "../../assets/login/LOGO.svg";

import { FaSearch } from "react-icons/fa";
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
} from "./styles";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthenticationMyUserContext } from "@/context/authenticationUser";

interface IHeader {
  modifyStateNavBarMenu: () => void;
}

export function Header({ modifyStateNavBarMenu }: IHeader) {
  const router = useRouter();
  const { userGoogle } = useContext(AuthenticationMyUserContext);

  console.log(userGoogle);

  if (userGoogle) {
    // console.log(userGoogle.user.photoURL);
  }

  function goPageLogin() {
    router.push("/");
  }

  function goPageSearch() {
    router.push("/search");
  }

  return (
    <ContentContainer>
      <Container>
        <Logo>
          <Image src={logo2} width={155} height={45} alt="logo" />
        </Logo>
        <NavContainer>
          <MenuXl>
            <Link href="/dashboard">START</Link>
            <Link href="/aboutus">ABOUT</Link>
            <Link href="##">TELEGRAM</Link>
          </MenuXl>
          <Icons>
            <IconProgessBar>
              <MdOutlineFormatAlignRight
                onClick={modifyStateNavBarMenu}
                className="iconHeaderDashboardHeader"
              />
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
                <BsPersonBoundingBox
                  onClick={goPageLogin}
                  className="iconHeaderDashboardHeader"
                />
              )}
            </Icon>
            <Icon>
              <FaSearch
                onClick={goPageSearch}
                className="iconHeaderDashboardHeader"
              />
            </Icon>
          </Icons>
        </NavContainer>
      </Container>
    </ContentContainer>
  );
}
