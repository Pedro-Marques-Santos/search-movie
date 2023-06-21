import { AboutBestmovies } from "../AboutBestmovies";
import { ImgBestmovies } from "../ImgBestmovies";
import { Container } from "./styles";

export function BestmoviesSlides() {
  return (
    <Container>
      <AboutBestmovies />
      <ImgBestmovies />
    </Container>
  );
}
