import { CategoriesNavBarMenu } from "../CategoriesNavBarMenu";
import { FooterNavBarMenu } from "../FooterNavBarMenu";
import { LinksNavBar } from "../LinksNavBar";
import { LogoAndCloseNavBarMenu } from "../LogoAndCloseNavBarMenu";
import { ContentContainer, Container } from "./styles";

interface INavBarMenu {
  stateNavBarMenu: boolean;
  openAndCloseNavBarMenu: () => void;
}

export function NavBarMenu({
  stateNavBarMenu,
  openAndCloseNavBarMenu,
}: INavBarMenu) {
  return (
    <ContentContainer statenavbarmenu={+stateNavBarMenu}>
      <Container>
        <LogoAndCloseNavBarMenu
          openAndCloseNavBarMenu={openAndCloseNavBarMenu}
        />
        <LinksNavBar />
        <CategoriesNavBarMenu />
        <FooterNavBarMenu />
      </Container>
    </ContentContainer>
  );
}

// obs nao pode mais utilizar boolean no styledcomponents
// o correto é transformar em number, o + transforma boolen em number
// sendo true = 1 e false = 0
