import { Category, Container } from "./styles";

export function CategoriesNavBarMenu() {
  return (
    <Container>
      <h5>Categories</h5>
      <Category href="#">Documentaries and Talk shows</Category>
      <Category href="#">War and Crime series and movies</Category>
      <Category href="#">8 movies and series recommended by DXX</Category>
      <Category href="#">Recommended for you</Category>
    </Container>
  );
}
