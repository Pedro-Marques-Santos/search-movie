import { Container } from "./styles";

interface IBackgroundGray {
  stateNavBarMenu: boolean;
}

export function BackgroundGray({ stateNavBarMenu }: IBackgroundGray) {
  return (
    <Container statenavbarmenu={stateNavBarMenu ? 1 : undefined}></Container>
  );
}
