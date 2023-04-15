"use client";

import { FolderOpen, Menu, Search, LayoutGrid, CalendarDays, CalendarRange, CalendarSearch, Plus, X, Settings, Moon, Sun } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import user from "@assets/img/user.jpg";

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
		<header className="lg:col-span-3 sticky top-0 z-[1024] top:static overscroll-contain">
			<div className="flex justify-between gap-4 items-center border-b border-slate-200 p-4 bg-white z-50 lg:hidden">
				<Link href="/">Task Management</Link>

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
				className={`absolute w-full z-50 bg-white top-full flex flex-col gap-4 lg:border-r lg:border-slate-300/50 overscroll-contain lg:-translate-x-0 transition-transform ease-in-out duration-500 lg:static ${
					isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex items-center gap-3 border-b border-slate-300/50 p-4 sticky top-0 bg-white z-50">
					<Image
						className="rounded-full h-[50px] w-[50px] border-[3px] border-slate-300/50"
						src={user}
						height={20}
						width={50}
						alt="Wisdom Ojimah"
					/>

					<div className="font-semibold -space-y-0.5">
						<h3>Wisdom Ojimah</h3>

						<p className="text-slate-500 text-sm">
							Morning, Wisdom
						</p>
					</div>
				</div>

                <nav className="px-4 relative overflow-y-auto grid gap-12">
                    <div className="divide-y-2 divide-slate-300/50">
                        <div className="flex flex-col gap-3 py-8 lg:py-4">
                            <h2 className="text-slate-400 text-md pl-3 font-semibold">
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

                        <div className="flex flex-col gap-4 py-8 lg:py-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-slate-400 text-md pl-3 font-semibold">
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

                            <ul className="flex flex-col gap-2">
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
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3 py-8 lg:py-4">
                            <h2 className="text-slate-400 text-md pl-3 font-semibold">
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

                    <div className="sticky bottom-0 rounded-full p-1.5 lg:p-1 bg-slate-300/50 mb-8 lg:mb-4 flex items-center justify-between gap-2">
                        <button
                            className="rounded-full py-1.5 lg:py-1 px-3 flex items-center gap-1.5 w-full justify-evenly hover:bg-white"
                            type="button"
                            aria-label="Toggle dark theme"
                        >
                            <Moon size={20} />
                            Dark
                        </button>

                        <button
                            className="rounded-full bg-white py-1.5 lg:py-1 px-3 flex items-center gap-1.5 w-full justify-evenly"
                            type="button"
                            aria-label="Toggle dark theme"
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
