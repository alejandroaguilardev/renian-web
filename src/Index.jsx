import Head from "next/head";
import Script from "next/script";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Footer, Header, WhatsappWidget } from "./components";
import Preloader from "./components/atoms/Preloader/Preloader";
import { PreloaderContext } from "./contexts/Preloader/PreloaderContext";
import 'react-toastify/dist/ReactToastify.css';

export const Index = ({children}) => {
	const { preloader } = useContext(PreloaderContext);

	return (
		<>
			<Head>
				<title>Renian | Registro Nacional de Identidad Animal</title>
				<meta name="description" content="Generated by create next app" />

				<link rel="icon" href="/renian.ico" />
			</Head>
			<Script src="https://cdn.lordicon.com/xdjxvujz.js"></Script>

			<div>
				<Header />
				{children}

				<WhatsappWidget />
				<Footer />
			</div>
			<ToastContainer/>

			{preloader && <Preloader />}
		</>
	);
};
