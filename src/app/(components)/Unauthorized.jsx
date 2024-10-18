"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Unauthorized() {
  const { data: session } = useSession();
  if (session?.user?.role === "admin") {
    router.push("/admin");
  }
  const [count, setCount] = useState(3);
  const router = useRouter();
  useEffect(() => {
    if (session?.user?.role === "user") {
      if (count > 0) {
        setInterval(() => {
          setCount(count - 1);
        }, 1000);
      }
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    }
  }, [router, count, session?.user?.role]);

  return (
    <div className="flex h-[calc(100dvh-7dvh)] w-full flex-col items-center justify-center">
      <h1 className="w-[80vw] rounded-lg border-4 border-red-600 bg-red-950 p-5 text-3xl font-semibold text-zinc-200">
        You are not authorized to view this page
      </h1>
      <p className="p-3 text-lg font-semibold text-zinc-700">
        Redirecting in {count}
      </p>
    </div>
  );
}
