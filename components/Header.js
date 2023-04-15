"use client";

import { FolderOpen, Menu, Search, LayoutGrid, CalendarDays, CalendarRange, CalendarSearch, Plus, X, Settings, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import user from "@assets/img/user.jpg";

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [theme, setTheme] = useState("");

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    useEffect(() => {
        if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setTheme(() => localStorage.getItem("theme"));
		} else {
			document.documentElement.classList.add("light");
			localStorage.setItem("theme", "light");
			setTheme(() => localStorage.getItem("theme"));
		}
    }, []);

    const toggleTheme = (theme) => {
        if (localStorage.theme === theme) {
            return;
        }

        if (localStorage.theme === "dark") {
			document.documentElement.classList.replace("dark", "light");
			localStorage.setItem("theme", "light");
			setTheme(() => localStorage.getItem("theme"));
		} else {
			document.documentElement.classList.replace("light", "dark");
			localStorage.setItem("theme", "dark");
			setTheme(() => localStorage.getItem("theme"));
		}
    };

    return (
		<header className={`lg:col-span-3 top-0 z-50 lg:static ${isMobileNavOpen ? "relative overscroll-contain" : "sticky"}`}>
			<div className="flex justify-between gap-4 items-center border-b border-slate-200 p-4 bg-white dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 lg:hidden">
				<Link href="/">OmniFocus</Link>

				<div className="flex items-center gap-2">
					<button
						className="btn"
						type="button"
						aria-label="Toggle search bar"
					>
						<Search size={20} />
					</button>

					<button
						className={`btn ${isMobileNavOpen ? "bg-sky-500/10 text-sky-700" : ""}`}
						type="button"
						aria-label="Toggle mobile nav bar"
						onClick={toggleMobileNav}
					>
						{isMobileNavOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
					</button>
				</div>
			</div>

			{/* Desktop sidebar */}
			<div
				className={`absolute w-full z-50 bg-white top-full flex flex-col gap-4 lg:border-r lg:border-slate-300/50 lg:-translate-x-0 transition-transform ease-in-out duration-500 lg:static dark:bg-slate-900 dark:text-slate-400 ${
					isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex items-center gap-3 border-b border-slate-300/50 p-4 sticky top-0 bg-white z-50 dark:bg-slate-900 dark:text-slate-400">
					<Image
						className="rounded-full h-[50px] w-[50px] border-2 border-slate-300/50"
						src={user}
						height={20}
						width={50}
						alt="Wisdom Ojimah"
					/>

					<div className="font-semibold -space-y-0.5 dark:text-slate-200">
						<h3>Wisdom Ojimah</h3>

						<p className="text-slate-500 text-sm dark:text-slate-300">
							Morning, Wisdom
						</p>
					</div>
				</div>

                <nav className="px-4 relative overflow-y-auto overscroll-contain grid gap-12">
                    <div className="divide-y-2 divide-slate-300/50">
                        <div className="flex flex-col gap-3 py-8 lg:py-4">
                            <h2 className="text-slate-400 text-md pl-3 font-semibold dark:text-slate-200">
                                MENU
                            </h2>

                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link
                                        className="btn flex items-center gap-3"
                                        href="/"
                                    >
                                        <LayoutGrid size={20} />
                                        Dashboard
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="btn flex items-center gap-3"
                                        href="/"
                                    >
                                        <FolderOpen size={20} />
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="btn flex items-center gap-3"
                                        href="/"
                                    >
                                        <CalendarRange size={20} />
                                        Today’s Tasks
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="btn flex items-center gap-3"
                                        href="/"
                                    >
                                        <CalendarSearch size={20} />
                                        All Tasks
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="btn flex items-center gap-3"
                                        href="/"
                                    >
                                        <CalendarDays size={20} />
                                        Calendar
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6 py-8 lg:py-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-slate-400 text-md pl-3 font-semibold dark:text-slate-200">
                                    TEAMS
                                </h2>

                                <button
                                    className="bg-blue-500 text-white p-2 rounded-md"
                                    type="button"
                                    aria-label="Add teams"
                                >
                                    <Plus size={10} />
                                </button>
                            </div>

                            <ul className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="pl-3 font-semibold">
                                        Glory Ojimah
                                    </h2>

                                    <div className="flex -space-x-2">
                                        <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                                        <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                                        <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                                        <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <h2 className="pl-3 font-semibold">
                                        Naomi Ojimah
                                    </h2>

                                    <div className="flex -space-x-2">
                                        <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                                        <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <h2 className="pl-3 font-semibold">
                                        Pius Ojimah
                                    </h2>

                                    <div className="flex -space-x-2">
                                        <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                                        <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />
                                    </div>
                                </div>
                            </ul>
                         </div>

                        <div className="flex flex-col gap-3 py-8 lg:py-4">
                            <h2 className="text-slate-400 text-md pl-3 font-semibold dark:text-slate-200">
                                GENERAL
                            </h2>

                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link
                                        className="btn flex items-center gap-3"
                                        href="/"
                                    >
                                        <Settings size={20} />
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                         </div>
                    </div>

                    <div className="sticky bottom-0 rounded-full p-1.5 lg:p-1 bg-slate-300/50 mb-8 lg:mb-4 flex items-center justify-between gap-2 dark:bg-slate-800 dark:text-slate-300">
                        <button
                            className={`rounded-full py-1.5 lg:py-1 px-3 flex items-center gap-1.5 w-full justify-evenly hover:bg-slate-900 hover:text-slate-400 ${theme === "dark" ? "bg-slate-900 text-slate-400" : ""}`}
                            type="button"
                            aria-label="Toggle dark theme"
                            onClick={() => toggleTheme("dark")}
                        >
                            <Moon size={20} />
                            Dark
                        </button>

                        <button
                            className={`rounded-full py-1.5 lg:py-1 px-3 flex items-center gap-1.5 w-full justify-evenly hover:bg-white hover:text-slate-900 ${theme === "light" ? "bg-white text-slate-900" : ""}`}
                            type="button"
                            aria-label="Toggle dark theme"
                            onClick={() => toggleTheme("light")}
                        >
                            <Sun size={20} />
                            Light
                        </button>
                    </div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
