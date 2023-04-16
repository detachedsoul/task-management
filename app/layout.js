import "./globals.css";
import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    subsets: ['latin'],
    weight: [
      "400",
      "600",
      "500",
      "700"
    ]
})

export const metadata = {
	  title: "OmniFocus | Home",
	  description: "Dashboard of a task management app",
};

const Layout = ({ children }) => {
	return (
		<html className="custom-scrollbar" lang="en">
            <body className={`bg-white text-slate-900 text-base dark:bg-slate-900 dark:text-slate-400 overscroll-contain lg:grid lg:grid-cols-12 ${nunito.className} tracking-wider leading-relaxed antialiased selection:bg-sky-500/10 selection:text-sky-700 scroll-smooth transition-all ease-linear duration-100 custom-scrollbar`}>
                <Header />

                <div className="lg:col-span-9">
                    <SearchBar />

                    <main className="p-4">
                        { children }
                    </main>
                </div>
            </body>
		</html>
	);
};

export default Layout;
