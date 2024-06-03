import Image from "next/image";
import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";

export default function Home() {
	return (
		<>
			<SignUpForm />
			<LoginForm />
		</>
	);
}
