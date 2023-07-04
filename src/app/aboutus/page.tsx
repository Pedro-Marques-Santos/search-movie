"use client";

import { Header } from "@/components/Header";
import { Container } from "./styles";
import { useState } from "react";
import { NavBarMenu } from "@/components/NavBarAllMenuComponents/NavBarMenu";

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
        <h1>who I am ?</h1>
        <h5>
          My name is pedro, Im a web developer, I created this site with the
          intention of testing my knowledge in nextjs, on this site I decided to
          use many libraries that I had never used before, the main objective
          was to acquire new knowledge and learn new things
        </h5>
        <h5>
          In short, creating this new site with Next.js is giving me an amazing
          opportunity to gain new knowledge and expand my development skills.
        </h5>
        <h1>what are the features of this site ?</h1>
        <h5>
          first you must login with google, the user has the option to enter as
          anonymous, but will only have access to movies and will be recommended
          when logging in with a google account. After logging in, you will be
          able to choose 3 favorite genres of movies and series that will be
          recommended to you. The site has a search system for the user to look
          for a specific movie.
        </h5>
      </Container>
    </>
  );
}
