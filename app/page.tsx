"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home/aboutme");
  }, [router]);

  return (
    <>
      <h1>Cris home</h1>
    </>
  );
}
