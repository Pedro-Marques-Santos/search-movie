"use server";

export async function searchAllGenres(): Promise<{}> {
  let response = await fetch(
    "https://streaming-availability.p.rapidapi.com/v2/genres",
    {
      next: { revalidate: 60 * 60 * 2 },
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8025634efcmsh620c16ee28b26bdp187450jsn496d45f55138",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  let result = (await response.json()) as {};

  return result;
}
