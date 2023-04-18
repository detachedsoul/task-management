import { Plus, MoreHorizontal, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import user from "@assets/img/user.jpg";

const IndexProjectsCard = () => {
    return (
        <section className="grid gap-4">
            <div className="flex items-center gap-4 justify-between">
                <div>
                    <h1 className="font-bold text-xl">
                        Projects
                    </h1>

                    <p>
                        You have <span className="text-sky-700 font-bold">4</span> projects
                    </p>
                </div>

                <button className="btn py-2 px-4 flex items-center gap-2 bg-sky-100/50 text-sky-800 hover:text-sky-400 hover:bg-[#7dd3fc1a] dark:text-sky-500 dark:bg-[#7dd3fc1f]" type="button" title="Add new project">
                    <Plus size={15} />
                    Add
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link className="rounded-xl grid gap-6 p-4 bg-gradient-to-tr from-blue-700 to-blue-500 text-white hover:from-blue-500 hover:to-blue-700 transition-all duration-500 ease-in-out" href="/">
                    <div className="flex items-center gap-4 justify-between">
                        <h3 className="font-bold text-lg">
                            Meet The Woman of My Dreams
                        </h3>

                        <MoreHorizontal size={20} />
                    </div>

                    <div className="space-y-0.5">
                        <div className="flex items-center gap-4 justify-between text-sm text-slate-300">
                            <p>
                                Progress
                            </p>

                            <p>
                                53%
                            </p>
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-full after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-full after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-3/4 after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-3/4 after:absolute after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-3/4 after:absolute after:rounded-lg"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex -space-x-2">
                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <CalendarDays size={20} />

                            <p>
                                April 20
                            </p>
                        </div>
                    </div>
                </Link>

                <Link className="rounded-xl grid gap-6 p-4 bg-gradient-to-tr from-neutral-800 to-gray-600 text-white hover:from-gray-600 hover:to-neutral-800 transition-all duration-500 ease-in-out" href="/">
                    <div className="flex items-center gap-4 justify-between">
                        <h3 className="font-bold text-lg">
                            Make 2 Billion Naira
                        </h3>

                        <MoreHorizontal size={20} />
                    </div>

                    <div className="space-y-0.5">
                        <div className="flex items-center gap-4 justify-between text-sm text-slate-300">
                            <p>
                                Progress
                            </p>

                            <p>
                                57%
                            </p>
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-full after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-full after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-3/4 after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-3/4 after:absolute after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-3/4 after:absolute after:rounded-lg"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex -space-x-2">
                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <CalendarDays size={20} />

                            <p>
                                April 28
                            </p>
                        </div>
                    </div>
                </Link>

                <Link className="rounded-xl grid gap-6 p-4 bg-gradient-to-tr from-red-700 to-rose-500 text-white hover:from-rose-500 hover:to-red-700 transition-all duration-500 ease-in-out" href="/">
                    <div className="flex items-center gap-4 justify-between">
                        <h3 className="font-bold text-lg">
                            Get A Foreign Job
                        </h3>

                        <MoreHorizontal size={20} />
                    </div>

                    <div className="space-y-0.5">
                        <div className="flex items-center gap-4 justify-between text-sm text-slate-300">
                            <p>
                                Progress
                            </p>

                            <p>
                                50%
                            </p>
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-full after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-full after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-1/2 after:absolute after:bg-white after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-3/4 after:absolute after:rounded-lg"></div>

                            <div className="h-1.5 bg-slate-300 rounded-lg relative after:h-1.5 after:w-3/4 after:absolute after:rounded-lg"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex -space-x-2">
                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />

                            <Image className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50" src={user} alt="" height={30} width={30} quality={100} />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <CalendarDays size={20} />

                            <p>
                                May 20
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default IndexProjectsCard;
