import { RefObject } from "react";
import { Category, Container } from "./styles";

interface ICategoriesNavBarMenu {
  myScrollToElement: (useref: RefObject<HTMLHeadingElement>) => void;
  documentariesRef: RefObject<HTMLHeadingElement>;
  warAndCrimeRef: RefObject<HTMLHeadingElement>;
  recommendDxxRef: RefObject<HTMLHeadingElement>;
  youRecommendRef: RefObject<HTMLHeadingElement>;
  comedyRef: RefObject<HTMLHeadingElement>;
}

export function CategoriesNavBarMenu({
  myScrollToElement,
  documentariesRef,
  warAndCrimeRef,
  recommendDxxRef,
  youRecommendRef,
  comedyRef,
}: ICategoriesNavBarMenu) {
  return (
    <Container>
      <h5>Categories</h5>
      <Category onClick={() => myScrollToElement(documentariesRef)}>
        Documentaries and Talk shows
      </Category>
      <Category onClick={() => myScrollToElement(warAndCrimeRef)}>
        War and Crime series and movies
      </Category>
      <Category onClick={() => myScrollToElement(comedyRef)}>
        Comedy series and movies
      </Category>
      <Category onClick={() => myScrollToElement(recommendDxxRef)}>
        8 movies and series recommended by DXX
      </Category>
      <Category onClick={() => myScrollToElement(youRecommendRef)}>
        Recommended for you
      </Category>
    </Container>
  );
}
