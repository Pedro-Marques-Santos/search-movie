"use client";
import { CardResultWatch } from "@/components/ResultWatchComponents/CardResultWatch/Card";
import { Container } from "./styles";
import { Header } from "@/components/Header";

export default function Page({ params }: { params: { tokentitle: string } }) {
  const title = decodeURI(params.tokentitle);

  return (
    <>
      <Header />
      <Container>
        <CardResultWatch />
      </Container>
    </>
  );
}
