"use client";

import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useEffect, useState } from "react";

interface IGenre {
  genre: string;
  isLikeGenre: boolean;
}

export default function Home() {
  const router = useRouter();

  const { userProfile } = useContext(AuthenticationMyUserContext);

  // console.log(userProfile);

  const [genres, setGenres] = useState<[]>([]);
  const [genresLike, setGenresLike] = useState<string[]>([]);

  useEffect(() => {
    const executefetch = async () => {
      let response = await fetch(
        "https://streaming-availability.p.rapidapi.com/v2/genres",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "8025634efcmsh620c16ee28b26bdp187450jsn496d45f55138",
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      let result = (await response.json()) as {};
      const resultarray = Object.entries(result)[0][1] as [];
      const resultgenres = Object.values(resultarray) as [];
      setGenres(resultgenres);
    };

    executefetch();
  }, []);

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

  async function userAddGenresRecommend() {}

  if (userProfile.id === "" || userProfile.id === undefined) {
    router.push("/");
  }

  if (userProfile.recommend.length === 3) {
    router.push("/dashboard");
  }

  return (
    <div className="h-screen bg-my-black-700">
      <div className="w-full max-w-screen-xl mx-auto pt-8 pr-4 pl-4 bg-my-black-700">
        <h1 className="text-white text-xl">
          choose 3 types of genres you would like to be recommended to you!
        </h1>
        <div className="mt-8 flex gap-5 justify-center flex-wrap">
          {genres.map((gen: string, index) => {
            return genresLike.includes(gen) === true ? (
              <div
                onClick={() => addNewGenresLike(gen)}
                key={index}
                className="w-36 h-20 bg-my-black-600 text-white flex justify-center items-center cursor-pointer border border-sky-700"
              >
                {gen}
              </div>
            ) : (
              <div
                onClick={() => addNewGenresLike(gen)}
                key={index}
                className="w-36 h-20 bg-my-black-600 text-white flex justify-center items-center cursor-pointer hover:bg-sky-700"
              >
                {gen}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-8 pb-8">
          <button
            type="submit"
            className="w-32 h-14 rounded-md bg-red-800 hover:bg-red-900 text-white text-lg"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
