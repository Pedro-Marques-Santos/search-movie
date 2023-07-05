"use server";

interface ISeriesAndMovies {
  type: string;
  title: string;
}

interface IResponseJson {
  result: ISeriesAndMovies[];
}

export async function war(): Promise<ISeriesAndMovies[]> {
  const params = new URLSearchParams({
    country: "us",
    services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
    output_language: "en",
    show_type: "all",
    genre: "18",
    keyword: "zombie",
  });

  let response = await fetch(
    `https://streaming-availability.p.rapidapi.com/v2/search/basic?${params}`,
    {
      next: { revalidate: 60 * 60 * 24 },
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8025634efcmsh620c16ee28b26bdp187450jsn496d45f55138",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  let responseJson = (await response.json()) as IResponseJson;

  return responseJson.result;
}
