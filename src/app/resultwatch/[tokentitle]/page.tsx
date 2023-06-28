"use client";

export default function Page({ params }: { params: { tokentitle: string } }) {
  const title = decodeURI(params.tokentitle);

  return (
    <>
      <div>My Post: {params.tokentitle}</div>
      <div>My Post: {title}</div>
    </>
  );
}
