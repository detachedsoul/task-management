import "./globals.css";
import Header from "@components/Header";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: "Todo | Home",
	description: "Dashboard of a Todo app",
};

const Layout = ({ children }) => {
	return (
		<html lang="en">
			<body className={`bg-white text-slate-900 text-base dar:bg-slate-900 dar:text-slate-300 lg:grid lg:grid-cols-12 ${inter.className} tracking-wider leading-relaxed antialiased selection:bg-sky-500/10 selection:text-sky-700`}>
          <Header />

          <main className="lg:col-span-9 p-4 hidden">
            { children }
          </main>
			</body>
		</html>
	);
};

export default Layout;
