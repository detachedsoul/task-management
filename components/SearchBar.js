import { Search, Bell, MessageSquare } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="px-4 py-[calc(1rem+0.09rem)] border-b border-slate-300/50 dark:border-slate-800 hidden lg:grid lg:grid-cols-2 lg:items-center gap-8 divide-x divide-slate-300/50 sticky top-0 bg-white/50 z-50 dark:bg-slate-900/50 backdrop-blur dark:divide-slate-800">
            <form>
                <label className="border text-slate-400/50 border-slate-400/50 dark:border-slate-800 dark:focus-within:border-slate-400 transition-all ease-in-out duration-100 dark:focus-within:text-inherit rounded-full flex items-center py-0.5 pl-4 focus-within:text-slate-800/50 focus-within:border-slate-800/50" htmlFor="search-form">
                    <Search size={20} />

                    <input className="bg-inherit w-full search-input" type="search" placeholder="Find your tasks, projects, etc..." id="search-form" />
                </label>
            </form>

            <div className="grid grid-cols-2 gap-2 justify-between divide-x divide-slate-300/50 dark:divide-slate-800">
                <div className="text-right px-2">
                    <p className="font-bold">
                        1:26 AM
                    </p>

                    <p className="text-sm">
                        Sunday, 16 April
                    </p>
                </div>

                <div className="flex items-center justify-around gap-2 pl-2 text-slate-700">
                    <button className="border rounded-full p-2 border-slate-300/50 dark:border-slate-800 hover:bg-slate-300 dark:hover:bg-slate-800 relative" type="button" aria-label="Messages">
                        <MessageSquare size={20} />

                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500 block absolute bottom-1.5 right-2"></span>
                    </button>

                    <button className="border rounded-full p-2 border-slate-300/50 dark:border-slate-800 hover:bg-slate-300 dark:hover:bg-slate-800 relative" type="button" aria-label="Notifications">
                        <Bell size={20} />

                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500 block absolute bottom-1.5 right-2"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
