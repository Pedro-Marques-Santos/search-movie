"use client";
import { CardResultWatch } from "@/components/ResultWatchComponents/CardResultWatch/Card";
import { Container } from "./styles";
import { Header } from "@/components/Header";
import { useState } from "react";
import { NavBarMenu } from "@/components/NavBarAllMenuComponents/NavBarMenu";
import { BackgroundGray } from "@/components/BackgroudGray";

export default function Page({ params }: { params: { tokentitle: string } }) {
  const title = decodeURI(params.tokentitle);
  const [stateNavBarMenu, setStateNavBarMenu] = useState(false);

  function openAndCloseNavBarMenu() {
    setStateNavBarMenu(!stateNavBarMenu);
  }
  return (
    <>
      <Header modifyStateNavBarMenu={openAndCloseNavBarMenu} />
      <NavBarMenu
        stateNavBarMenu={stateNavBarMenu ? 1 : undefined}
        openAndCloseNavBarMenu={openAndCloseNavBarMenu}
      />
      <BackgroundGray stateNavBarMenu={stateNavBarMenu} />
      <Container>
        <CardResultWatch />
      </Container>
    </>
  );
}
