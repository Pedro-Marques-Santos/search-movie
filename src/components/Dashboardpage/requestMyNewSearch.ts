"use server";

interface IResponseJson {
  result: [];
}

export async function resquestGenresMyRecommend(name: string): Promise<[]> {
  const params = new URLSearchParams({
    country: "us",
    services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
    output_language: "en",
    show_type: "all",
    title: name,
  });

  let response = await fetch(
    `https://streaming-availability.p.rapidapi.com/v2/search/title?${params}`,
    {
      method: "GET",
      next: { revalidate: 60 * 60 * 24 },
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
