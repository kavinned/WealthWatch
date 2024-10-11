import React from "react";

const MobileMenuButton = ({ onClick }) => {
	return (
		<div className="w-full h-[4dvh] text-center">
			<button
				className="bg-zinc-800 shadow-md shadow-black text-xl font-semibold text-white md:hidden hover:drop-shadow-2xl border-zinc-800 border-2 rounded-lg w-[99vw] mt-1"
				onClick={onClick}
				aria-label="Open menu"
			>
				Menu
			</button>
		</div>
	);
};

export default MobileMenuButton;
