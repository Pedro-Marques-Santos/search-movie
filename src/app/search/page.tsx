"use client";

import { Header } from "@/components/Header";
import { Container, ContainerSlides } from "./styles";
import { NavBarMenu } from "@/components/NavBarAllMenuComponents/NavBarMenu";
import { useState } from "react";
import { SlidesSearch } from "@/components/SearchComponents/SlidesSearch";
import { Footer } from "@/components/AllFooter/Footer";

export default function Home() {
  const [stateNavBarMenu, setStateNavBarMenu] = useState(false);

  function openAndCloseNavBarMenu() {
    setStateNavBarMenu(!stateNavBarMenu);
  }

  return (
    <>
      <Header modifyStateNavBarMenu={openAndCloseNavBarMenu} />
      <NavBarMenu
        stateNavBarMenu={stateNavBarMenu}
        openAndCloseNavBarMenu={openAndCloseNavBarMenu}
      />
      <Container>
        <h5>Search movie and series</h5>
        <input type="text" placeholder="search" />
        <ContainerSlides>
          <SlidesSearch />
          <SlidesSearch />
          <SlidesSearch />
          <SlidesSearch />
          <SlidesSearch />
          <SlidesSearch />
          <SlidesSearch />
          <SlidesSearch />
        </ContainerSlides>
        <Footer />
      </Container>
    </>
  );
}
