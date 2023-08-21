import { Container } from "./styles";

import YouTube from "react-youtube";

interface IVideo {
  youtubeTrailerVideoId: string | null | undefined;
}

export function Video({ youtubeTrailerVideoId }: IVideo) {
  const videoId = youtubeTrailerVideoId as unknown as string;

  const opts = {
    width: "100%",
    hight: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // Define se o vídeo inicia automaticamente
    },
  };

  return (
    <Container>
      <YouTube videoId={videoId} opts={opts} className="youtube-video" />
    </Container>
  );
}
