import { Quicksand } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers";
import NavBar from "./(components)/NavBar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
	title: "WealthWatch",
	description:
		"A budget and transaction tracker with stock tracking functionality.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={quicksand.className}>
				<AuthProvider>
					<NavBar />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
