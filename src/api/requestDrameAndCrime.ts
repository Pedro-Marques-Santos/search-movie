"use server";

interface IResponseJson {
  result: [];
}

// -----------------------------------------------------------
// Drame
// -----------------------------------------------------------
export async function resquestGenresDrame(): Promise<[]> {
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

// -----------------------------------------------------------
// Crime
// -----------------------------------------------------------
export async function resquestGenresCrime(): Promise<[]> {
  const params = new URLSearchParams({
    country: "us",
    services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
    output_language: "en",
    show_type: "all",
    genre: "80",
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

// -----------------------------------------------------------
// Comedy
// -----------------------------------------------------------
export async function resquestGenresComedy(): Promise<[]> {
  const params = new URLSearchParams({
    country: "us",
    services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
    output_language: "en",
    show_type: "all",
    genre: "35",
    keyword: "american",
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

// -----------------------------------------------------------
// Aleatório
// -----------------------------------------------------------
export async function resquestGenresRamdom(): Promise<[]> {
  const params = new URLSearchParams({
    country: "us",
    services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
    output_language: "en",
    show_type: "all",
    keyword: "war",
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

// -----------------------------------------------------------
// Documentaries
// -----------------------------------------------------------
export async function resquestGenresDocumentariesOne(): Promise<[]> {
  const params = new URLSearchParams({
    country: "us",
    services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
    output_language: "en",
    show_type: "all",
    keyword: "nature",
    genre: "99",
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

// -----------------------------------------------------------
// Documentaries
// -----------------------------------------------------------
export async function resquestGenresDocumentariesTwo(): Promise<[]> {
  const params = new URLSearchParams({
    country: "us",
    services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
    output_language: "en",
    show_type: "all",
    keyword: "war",
    genre: "99",
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

// -----------------------------------------------------------
// BestMovies
// -----------------------------------------------------------
export async function resquestGenresBestmovies(): Promise<[]> {
  const params = new URLSearchParams({
    country: "us",
    services: "netflix,prime.buy,hulu.addon.hbo,peacock.free",
    output_language: "en",
    show_type: "all",
    keyword: "star wars",
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
