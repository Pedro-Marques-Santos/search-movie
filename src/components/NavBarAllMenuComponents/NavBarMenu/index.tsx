import { RefObject } from "react";
import { CategoriesNavBarMenu } from "../CategoriesNavBarMenu";
import { FooterNavBarMenu } from "../FooterNavBarMenu";
import { LinksNavBar } from "../LinksNavBar";
import { LogoAndCloseNavBarMenu } from "../LogoAndCloseNavBarMenu";
import { ContentContainer, Container } from "./styles";

interface INavBarMenu {
  stateNavBarMenu?: number | undefined;
  openAndCloseNavBarMenu: () => void;
  documentariesRef?: RefObject<HTMLHeadingElement>;
  warAndCrimeRef?: RefObject<HTMLHeadingElement>;
  recommendDxxRef?: RefObject<HTMLHeadingElement>;
  youRecommendRef?: RefObject<HTMLHeadingElement>;
  comedyRef?: RefObject<HTMLHeadingElement>;
}

export function NavBarMenu({
  stateNavBarMenu,
  openAndCloseNavBarMenu,
  documentariesRef,
  warAndCrimeRef,
  recommendDxxRef,
  youRecommendRef,
  comedyRef,
}: INavBarMenu) {
  const myScrollToElement = (useref: RefObject<HTMLHeadingElement>) => {
    if (useref.current) {
      const boundingRef = useref.current.getBoundingClientRect();
      const topOffset = window.scrollY + boundingRef.top - 83;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
      if (stateNavBarMenu) {
        openAndCloseNavBarMenu();
      }
    } else {
      alert("login with google to access recommended movies");
    }
  };

  return (
    <ContentContainer statenavbarmenu={stateNavBarMenu}>
      <Container>
        <LogoAndCloseNavBarMenu
          openAndCloseNavBarMenu={openAndCloseNavBarMenu}
        />
        <LinksNavBar />
        {documentariesRef &&
        warAndCrimeRef &&
        recommendDxxRef &&
        youRecommendRef &&
        comedyRef ? (
          <CategoriesNavBarMenu
            myScrollToElement={myScrollToElement}
            documentariesRef={documentariesRef}
            warAndCrimeRef={warAndCrimeRef}
            recommendDxxRef={recommendDxxRef}
            youRecommendRef={youRecommendRef}
            comedyRef={comedyRef}
          />
        ) : (
          <></>
        )}
        <FooterNavBarMenu />
      </Container>
    </ContentContainer>
  );
}
