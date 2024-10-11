"use client";
import React from "react";
import Link from "next/link";

const MobileNavModal = ({ onClose, session, signOut, router }) => {
	return (
		<div className="w-screen h-screen z-50 flex items-center justify-center flex-col absolute">
			<div className="bg-white w-fit h-fit flex items-center justify-around flex-col rounded-lg bg-opacity-75 shadow-2xl shadow-zinc-500 p-20 gap-10 text-4xl font-semibold text-zinc-800">
				<ul className="nav-list w-full flex flex-col items-center justify-around text-center gap-5">
					<li>
						<Link href="/dashboard" onClick={onClose}>
							Dashboard
						</Link>
					</li>
					<li>
						<Link href="/budgets" onClick={onClose}>
							Budgets
						</Link>
					</li>
					<li>
						<Link href="/stocks" onClick={onClose}>
							Stocks
						</Link>
					</li>
					{session?.user?.role === "admin" && (
						<li>
							<Link href="/admin" onClick={onClose}>
								Admin Dashboard
							</Link>
						</li>
					)}
				</ul>
				<button
					onClick={onClose}
					className="close-button rounded-full bg-zinc-700 text-white size-10 drop-shadow-lg shadow-zinc-950 shadow-sm"
				>
					&times;
				</button>
				<button
					onClick={() => {
						signOut();
						router.push("/");
						onClose();
					}}
					className="close-button rounded-2xl bg-red-500 text-white text-sm w-fit h-fit p-2 drop-shadow-lg shadow-red-950 shadow-sm"
				>
					Sign Out
				</button>
			</div>
		</div>
	);
};

export default MobileNavModal;
