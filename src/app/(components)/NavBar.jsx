"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavModal from "./MobileNavModal";

export default function NavBar() {
	const { data: session } = useSession();
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			{session ? (
				<nav className="w-full h-[7dvh] sticky bg-zinc-800 drop-shadow-lg shadow-lg text-sm font-semibold hidden md:flex">
					<div className="flex flex-row items-center justify-around w-full h-full">
						{session?.user?.role === "admin" && (
							<>
								<Link className="nav-btn" href="/admin">
									Admin Dashboard
								</Link>
								<hr className="rotate-90 border-zinc-500 h-3 w-2" />
							</>
						)}
						<Link className="nav-btn" href="/stocks">
							Stocks
						</Link>
						<hr className="rotate-90 border-zinc-500 h-3 w-2" />
						<Link className="nav-btn" href="/dashboard">
							Dashboard
						</Link>
						<hr className="rotate-90 border-zinc-500 h-3 w-2" />
						<Link className="nav-btn" href="/budgets">
							Budgets
						</Link>
						<hr className="rotate-90 border-zinc-500 h-3 w-2" />
						<button
							className="bg-red-600 text-white border-red-800 border-2 rounded-md py-1 px-2 w-fit self-center hover:bg-red-800 transition-all duration-200 ease-in-out drop-shadow-lg shadow-md shadow-zinc-700"
							onClick={() => {
								signOut();
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

			{session && <MobileMenuButton onClick={toggleModal} />}

			{session && showModal && (
				<MobileNavModal
					onClose={toggleModal}
					session={session}
					router={router}
					signOut={signOut}
				/>
			)}
		</>
	);
}
