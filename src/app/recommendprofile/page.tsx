"use client";
import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { searchAllGenres } from "./allgenres";
import {
  AllGenres,
  Button,
  Container,
  ContentContainer,
  FavoriteGenres,
  ListAllGenres,
} from "./styles";
import { GifCenter } from "@/components/Gif/GifCenter";

import allgenres from "../../data/genres";

interface IAllgenres {
  id: string;
  name: string;
}

export default function Home() {
  const router = useRouter();

  const { userProfile, modifyUserAddGenres } = useContext(
    AuthenticationMyUserContext
  );

  const [stateLoadingLogin, setStateLoadingLogin] = useState(false);

  const newgenres = allgenres as IAllgenres[];

  const [genresLike, setGenresLike] = useState<string[]>([]);

  useEffect(() => {
    if (userProfile.recommend.length === 3) {
      router.push("/dashboard");
    }
  }, [router, userProfile.recommend.length]);

  function addNewGenresLike(genre: string) {
    if (genresLike.includes(genre) === false) {
      if (genresLike.length < 3) {
        setGenresLike([...genresLike, genre]);
      } else {
        genresLike.shift();
        setGenresLike([...genresLike, genre]);
      }
    }
  }

  async function userAddGenresRecommend() {
    if (genresLike.length === 3 && userProfile.id) {
      setStateLoadingLogin(true);
      const response = await modifyUserAddGenres({
        id: userProfile.id,
        recommend: genresLike,
      });
    } else {
      alert("you must choose 3 genres!");
    }
  }

  if (userProfile.id === "" || userProfile.id === undefined) {
    router.push("/");
  }

  return (
    <ContentContainer>
      <Container>
        <h1>
          choose 3 types of genres you would like to be recommended to you!
        </h1>
        <ListAllGenres className="mt-8 flex gap-5 justify-center flex-wrap">
          {newgenres.map((gen, index) => {
            return genresLike.includes(gen.id) === true ? (
              <FavoriteGenres
                onClick={() => addNewGenresLike(gen.id)}
                key={index}
                className="w-36 h-20 bg-my-black-600 text-white flex justify-center items-center cursor-pointer border border-sky-700"
              >
                {gen.name}
              </FavoriteGenres>
            ) : (
              <AllGenres
                onClick={() => addNewGenresLike(gen.id)}
                key={index}
                className="w-36 h-20 bg-my-black-600 text-white flex justify-center items-center cursor-pointer hover:bg-sky-700"
              >
                {gen.name}
              </AllGenres>
            );
          })}
        </ListAllGenres>
        <Button className="flex justify-center mt-8 pb-8">
          <button
            disabled={stateLoadingLogin}
            onClick={userAddGenresRecommend}
            type="submit"
            className="w-32 h-14 rounded-md bg-red-800 hover:bg-red-900 text-white text-lg"
          >
            Select genres
          </button>
        </Button>
      </Container>
      {stateLoadingLogin ? (
        <GifCenter top="76%" left="48.5%" width={"38px"} height={"38px"} />
      ) : (
        <></>
      )}
    </ContentContainer>
  );
}
