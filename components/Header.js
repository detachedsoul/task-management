"use client";

import { FolderOpen, Menu, Search, LayoutGrid, CalendarDays, CalendarRange, CalendarSearch, Plus, X, Settings, Moon, Sun, Bell, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import useToggleNotificationBar from "@store/useToggleNotificationBar";
import Image from "next/image";
import Link from "next/link";
import user from "@assets/img/user.jpg";

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [theme, setTheme] = useState("");

    const isNotificationBarOpen = useToggleNotificationBar((state) => state.isNotificationBarOpen);
    const toggleNotificationBar = useToggleNotificationBar((state) => state.toggleNotificationBar);

    const toggleMobileNav = () => {
        if (isNotificationBarOpen) {
            toggleNotificationBar();

            return;
        }

        if (isNotificationBarOpen && !isMobileNavOpen) {
            toggleNotificationBar(false);

            return;
        }

        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const toggleMobileSearchBar = () => {
        setIsSearchBarOpen(!isSearchBarOpen);
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
		<header className="lg:col-span-3 top-0 z-50 sticky">
			<div className="flex justify-between gap-4 items-center border-b border-slate-300/50 p-4 bg-white/50 dark:bg-slate-900/50 dark:text-slate-400 dark:border-slate-800 lg:hidden backdrop-blur-md">
				<Link href="/">OmniFocus</Link>

				<div className="flex items-center gap-2">
					<button
						className={`btn ${isSearchBarOpen ? "dark:text-sky-400 dark:bg-[#7dd3fc1a]" : ""}`}
						type="button"
						aria-label="Toggle search bar"
						onClick={toggleMobileSearchBar}
					>
						<Search size={20} />
					</button>

					<button
						className={`btn ${(isMobileNavOpen && !isNotificationBarOpen) || (!isMobileNavOpen && isNotificationBarOpen) ? "dark:text-sky-400 dark:bg-[#7dd3fc1a]" : ""}`}
						type="button"
						aria-label="Toggle mobile nav bar"
						onClick={toggleMobileNav}
					>
						{(isMobileNavOpen && !isNotificationBarOpen) || (!isMobileNavOpen && isNotificationBarOpen) ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
					</button>
				</div>
			</div>

			{/* Desktop sidebar */}
			<div
				className={`fixed w-full z-30 bg-white top-[4.76rem] h-full sm:top-0 sm:w-1/2 md:w-2/5 sm:border-r sm:border-slate-300/50 sm:dark:border-slate-800 lg:-translate-x-0 transition-transform ease-in-out duration-500 lg:w-1/4 lg:inset-0 lg:gap-0 dark:bg-slate-900 dark:text-slate-400 ${
					isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="md:flex items-center gap-3 border-b border-slate-300/50 dark:border-slate-800 px-4 py-[0.8rem] lg:py-4 bg-white/50 z-50 dark:bg-slate-900/50 backdrop-blur dark:text-slate-400 hidden">
					<Image
						className="rounded-full h-[50px] w-[50px] border-2 border-slate-300/50"
						src={user}
						height={20}
						width={50}
						alt="Wisdom Ojimah"
					/>

					<div className="font-semibold -space-y-0.5 dark:text-slate-200">
						<h3>Wisdom Ojimah</h3>

						<p className="text-slate-500 text-sm dark:text-slate-400">
							Morning, Wisdom
						</p>
					</div>
				</div>

                <nav className="px-4 relative grid gap-12 overflow-y-auto no-scrollbar overscroll-contain h-[calc(100%-4.8rem)]">
                    <div className="divide-y-2 divide-slate-300/50 dark:divide-slate-800">
                        <div className="grid grid-cols-2 gap-2 justify-between divide-x divide-slate-300/50 dark:divide-slate-800 border-b border-slate-300/50 dark:border-slate-800 py-4 lg:hidden" hidden>
                            <div className="text-right px-2">
                                <p className="font-bold">
                                    1:26 AM
                                </p>

                                <p className="text-sm">
                                    Sunday, 16 April
                                </p>
                            </div>

                            <div className="flex items-center justify-around gap-2 pl-2 text-slate-700">
                                <button className="border rounded-full p-2 border-slate-300/50 dark:border-slate-800 hover:bg-slate-300/50 dark:hover:bg-slate-800 relative" type="button" aria-label="Messages" onClick={() => {
                                    toggleNotificationBar()
                                    toggleMobileNav()
                                }}>
                                    <MessageSquare size={15} />

                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500 block absolute bottom-1.5 right-2"></span>
                                </button>

                                <button className="border rounded-full p-2 border-slate-300/50 dark:border-slate-800 hover:bg-slate-300/50 dark:hover:bg-slate-800 relative" type="button" aria-label="Notifications" onClick={() => {
                                    toggleNotificationBar()
                                    toggleMobileNav()
                                }}>
                                    <Bell size={15} />

                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500 block absolute bottom-1.5 right-2"></span>
                                </button>
                            </div>
                        </div>

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

                    <div className="rounded-full w-full p-1.5 lg:p-1 bg-slate-300/50 mb-8 lg:mb-4 flex justify-between gap-2 dark:bg-slate-800 dark:text-slate-300">
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

            <div className={`absolute w-full z-50 top-full p-4 grid gap-4 sm:w-1/2 sm:left-1/4 sm:border lg:hidden lg:not-sr-only bg-white dark:bg-slate-900 rounded-b-xl border-b transition-all duration-500 ease-in-out dark:border-slate-800 border-slate-400/50 dark:focus-within:border-slate-400 focus-within:border-slate-800/50 ${isSearchBarOpen ? "translate-y-0" : "-translate-y-[200%]"}`}>
                <div className="flex items-center gap-3 bg-white z-50 dark:bg-slate-900 dark:text-slate-400">
					<Image
						className="rounded-full h-[40px] w-[40px] border-2 border-slate-300/50"
						src={user}
						height={40}
						width={40}
						alt="Wisdom Ojimah"
					/>

					<div className="font-semibold -space-y-0.5 dark:text-slate-200">
						<h3>Wisdom Ojimah</h3>

						<p className="text-slate-500 text-sm dark:text-slate-400">
							Morning, Wisdom
						</p>
					</div>
				</div>

                <form>
                    <label className="border text-slate-400/50 border-slate-400/50 dark:border-slate-800 dark:focus-within:border-slate-400 transition-all ease-in-out duration-100 dark:focus-within:text-inherit rounded-full flex items-center py-0.5 pl-4 focus-within:text-slate-800/50 focus-within:border-slate-800/50" htmlFor="search-form">
                        <Search size={20} />

                        <input className="bg-inherit w-full search-input" type="search" placeholder="Find your tasks, projects, etc..." id="search-form" />
                    </label>
                </form>
            </div>
		</header>
	);
};

export default Header;
