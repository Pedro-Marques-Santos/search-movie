import { Container, Exit, User } from "./styles";

import { ImExit } from "react-icons/im";

import { BsPersonBoundingBox } from "react-icons/bs";

export function FooterNavBarMenu() {
  return (
    <Container>
      <Exit>
        <ImExit size={23} style={{ color: "var(--white-200)" }} />
      </Exit>
      <User>
        <BsPersonBoundingBox size={23} style={{ color: "var(--white-200)" }} />
      </User>
    </Container>
  );
}
