"use client";
import { Header } from "@/components/Header";
import { AuthenticationMyUserContext } from "@/context/authenticationUser";
import { useContext, useEffect } from "react";

export default function Home() {
  const { userProfile } = useContext(AuthenticationMyUserContext);

  useEffect(() => {
    if (userProfile.id !== "" && userProfile.id) {
      console.log(userProfile);
    }
  }, [userProfile, userProfile.id, userProfile.recommend.length]);

  return (
    <div className="h-screen bg-my-black-700">
      <Header typeHeader={"standard"} />
      <div>teste</div>
    </div>
  );
}
