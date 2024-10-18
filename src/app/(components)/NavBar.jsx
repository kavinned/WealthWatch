"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {session ? (
        <nav className="sticky z-50 flex h-[7svh] w-screen max-w-[100svw] flex-col bg-zinc-800 text-sm font-semibold shadow-lg drop-shadow-lg md:flex-row">
          <button
            className="nav-btn mt-[2svh] h-fit w-fit self-center bg-zinc-900 text-center text-xs md:mt-0 md:hidden"
            onClick={handleClick}
          >
            {openMenu ? "Close" : "Menu"}
          </button>

          <div
            className={`nav-menu z-50 order-1 w-full flex-col justify-around gap-3 bg-zinc-800 p-5 md:flex md:flex-row md:gap-0 md:p-0 ${
              openMenu == true ? "flex" : "hidden"
            }`}
          >
            {session?.user?.role === "admin" && (
              <>
                <Link
                  className="nav-btn w-full md:w-fit"
                  href="/admin"
                  onClick={handleClick}
                >
                  Admin Dashboard
                </Link>
                <hr className="hidden h-full w-2 rotate-90 border-zinc-500 md:block" />
              </>
            )}
            <Link
              className="nav-btn w-full md:w-fit"
              href="/stocks"
              onClick={handleClick}
            >
              Stocks
            </Link>
            <hr className="hidden h-full w-2 rotate-90 border-zinc-500 md:block" />
            <Link
              className="nav-btn w-full md:w-fit"
              href="/dashboard"
              onClick={handleClick}
            >
              Dashboard
            </Link>
            <hr className="hidden h-full w-2 rotate-90 border-zinc-500 md:block" />
            <Link
              className="nav-btn w-full md:w-fit"
              href="/budgets"
              onClick={handleClick}
            >
              Budgets
            </Link>
            <hr className="hidden h-full w-2 rotate-90 border-zinc-500 md:block" />
            <button
              className="mt-3 w-fit self-center rounded-md border-2 border-red-800 bg-red-600 px-2 py-1 text-white shadow-md shadow-red-950 drop-shadow-lg transition-all duration-200 ease-in-out hover:bg-red-800 md:mt-0"
              onClick={() => {
                signOut();
                handleClick;
                router.replace("/");
              }}
              type="button"
            >
              Sign Out
            </button>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}
