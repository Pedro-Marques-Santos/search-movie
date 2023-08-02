"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Container, ContainerInput, ContainerSlides } from "./styles";
import { NavBarMenu } from "@/components/NavBarAllMenuComponents/NavBarMenu";
import { useState } from "react";
import { SlidesSearch } from "@/components/SearchComponents/SlidesSearch";
import { BackgroundGray } from "@/components/BackgroudGray";
import { resquestGenresMyRecommend } from "@/components/Dashboardpage/requestMyNewSearch";
import { IGenreMoviesAndSeries } from "../dashboard/page";
import { MyMovieAndSerieContext } from "@/context/myMovieAndSerie";
import { GifCenter } from "@/components/Gif/GifCenter";
import { getSearchItemLocalStorage, setSearchItemStorage } from "./locaStorage";

export default function Home() {
  const { modifyMyMovieAndSerie } = useContext(MyMovieAndSerieContext);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const router = useRouter();

  const [stateLoadingLogin, setStateLoadingLogin] = useState(false);
  const [stateNavBarMenu, setStateNavBarMenu] = useState(false);
  const [genreMySearch, setGenreMySearch] = useState<[]>([]);
  const [search, setSearch] = useState("");

  function openAndCloseNavBarMenu() {
    setStateNavBarMenu(!stateNavBarMenu);
  }

  useEffect(() => {
    if (isButtonDisabled) {
      const timer = setTimeout(() => {
        setIsButtonDisabled(false);
      }, 5000); // 10 segundos

      return () => clearTimeout(timer);
    }
  }, [isButtonDisabled]);

  useEffect(() => {
    if (genreMySearch.length === 0) {
      const genreMySearch = getSearchItemLocalStorage("searchSerieAndMovie");
      if (genreMySearch) {
        setGenreMySearch(genreMySearch);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleNewSearch() {
    if (search) {
      setIsButtonDisabled(true);
      const genreMySearch = await resquestGenresMyRecommend(search);
      setSearchItemStorage("searchSerieAndMovie", genreMySearch);
      setGenreMySearch(genreMySearch);
      console.log(genreMySearch);
    }
  }

  function searchMovieOrSerieWatch(
    title: string,
    drame: IGenreMoviesAndSeries
  ) {
    setStateLoadingLogin(true);
    modifyMyMovieAndSerie(drame);
    const tokentitle = encodeURI(title);
    router.push(`/resultwatch?search=${tokentitle}`);
  }

  // Função para verificar se o objeto está vazio
  const isObjectEmpty = (obj: { original?: string; constructor?: any }) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  genreMySearch.map((drame: IGenreMoviesAndSeries) => {
    if (drame.backdropURLs.original) {
      console.log(drame.backdropURLs.original);
    }
  });

  return (
    <>
      <Header modifyStateNavBarMenu={openAndCloseNavBarMenu} />
      <NavBarMenu
        stateNavBarMenu={stateNavBarMenu ? 1 : undefined}
        openAndCloseNavBarMenu={openAndCloseNavBarMenu}
      />
      <BackgroundGray stateNavBarMenu={stateNavBarMenu} />
      {stateLoadingLogin ? (
        <GifCenter top="50%" left="50%" width={"38px"} height={"38px"} />
      ) : (
        <></>
      )}
      <Container>
        <h5>Search movie and series</h5>
        <ContainerInput>
          <input
            type="text"
            placeholder="search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            type="submit"
            onClick={handleNewSearch}
            disabled={isButtonDisabled}
          >
            Search
          </button>
        </ContainerInput>
        <ContainerSlides>
          {genreMySearch?.map((drame: IGenreMoviesAndSeries, index) => {
            return drame.backdropURLs.original ? (
              <div key={index}>
                <div
                  onClick={() => searchMovieOrSerieWatch(drame.title, drame)}
                >
                  <SlidesSearch
                    title={drame.title}
                    img={drame.backdropURLs.original}
                  />
                </div>
              </div>
            ) : null;
          })}
        </ContainerSlides>
      </Container>
    </>
  );
}
