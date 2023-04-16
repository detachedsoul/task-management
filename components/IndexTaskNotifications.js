"use client";

import { Plus } from "lucide-react";
import useToggleNotificationBar from "@store/useToggleNotificationBar";
import Image from "next/image";
import user from "@assets/img/user.jpg";

const IndexTaskNotifications = () => {
	const isNotificationBarOpen = useToggleNotificationBar((state) => state.isNotificationBarOpen);

    return (
		<aside className={`z-10 lg:border-l lg:border-slate-300/50 lg:dark:border-slate-800 w-full fixed right-0 lg:w-[30%] h-screen transition-transform ease-in-out duration-500 top-[4.76rem] lg:top-[5.2rem] ${isNotificationBarOpen ? "translate-x-0" : "translate-x-full"}`}>
			<div className="fixed right-0 left-0 top-0 w-full h-screen bg-slate-200 dark:bg-slate-800 lg:left-auto lg:border-l lg:border-slate-300/50">
				<div className="flex items-center justify-between gap-1 pt-8 lg:pt-4 px-4 bg-white dark:bg-slate-900 border-b border-slate-300 dark:border-slate-900">
					<button
						className="text-slate-500 transition-all ease-linear hover:border-b-2 border-0 hover:font-bold hover:text-slate-900 hover:border-slate-900 pb-2 dark:hover:text-slate-200"
						type="button"
					>
						Messages
					</button>

					<button
						className="border-b-2 border-slate-900 text-slate-900 font-bold dark:text-slate-200 dark:border-slate-200 pb-2"
						type="button"
					>
						Today’s Tasks
					</button>

					<button
						className="text-slate-500 transition-all ease-linear hover:border-b-2 border-0 hover:font-bold hover:text-slate-900 hover:border-slate-900 pb-2 dark:hover:text-slate-200"
						type="button"
					>
						Last Activity
					</button>
				</div>

				<div className="overflow-y-auto overscroll-contain no-scrollbar h-[calc(100vh-10rem)] lg:h-[calc(100vh-9rem)] p-4">
					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-4 justify-between">
							<div>
								<h2 className="font-bold text-lg">
									Today’s Tasks
								</h2>

								<p className="text-sm">Sunday, 16 April</p>
							</div>

							<button
								className="btn py-1.5 px-4 inline-flex items-center gap-2 bg-sky-500/10 text-sky-700"
								type="button"
								title="Add new task"
							>
								<Plus size={15} />
								New Task
							</button>
						</div>

						<div className="flex items-center gap-2 divide-x divide-slate-300/50 max-w-full overflow-x-auto no-scrollbar">
							<button
								className="font-bold text-sky-700 flex items-center gap-2"
								type="button"
							>
								All
								<span className="rounded-full py-px px-1.5 bg-blue-500 text-white text-xs">
									35
								</span>
							</button>

							<div className="flex items-center gap-4 justify-between pl-2">
								<button
									className="font-bold text-slate-400 hover:text-sky-700 flex items-center gap-2 group"
									type="button"
								>
									Open
									<span className="rounded-full py-px px-1.5 bg-slate-400 text-white group-hover:bg-blue-500 transition-colors duration-500 ease-in-out text-xs">
										14
									</span>
								</button>

								<button
									className="font-bold text-slate-400 hover:text-sky-700 flex items-center gap-2 group"
									type="button"
								>
									Closed
									<span className="rounded-full py-px px-1.5 bg-slate-400 text-white group-hover:bg-blue-500 transition-colors duration-500 ease-in-out text-xs">
										20
									</span>
								</button>

								<button
									className="font-bold text-slate-400 hover:text-sky-700 flex items-center gap-2 group"
									type="button"
								>
									Archived
									<span className="rounded-full py-px px-1.5 bg-slate-400 text-white group-hover:bg-blue-500 transition-colors duration-500 ease-in-out text-xs">
										10
									</span>
								</button>
							</div>
						</div>

						<div className="grid gap-4">
							<div className="bg-white rounded-xl p-4 divide-y divide-y-300/50 dark:divide-y-slate-900">
								<div className="flex items-center justify-between gap-2 pb-4">
									<div className="-space-y-1.5">
										<h3 className="font-bold text-md text-slate-900 decoration-slate-700">
											Client Review & Feedback
										</h3>

										<p className="text-slate-400 font-bold text-sm">
											Web development
										</p>
									</div>

									<input
										className="input-checkbox rounded-full text-sky-700 p-2"
										type="checkbox"
									/>
								</div>

								<div className="flex items-center justify-between gap-2 pt-4">
									<p className="text-slate-400 font-bold text-xs">
										April 16, 10:00 PM - 10:30 PM
									</p>

									<div className="flex -space-x-2">
										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-4 divide-y divide-y-300/50 dark:divide-y-slate-900">
								<div className="flex items-center justify-between gap-2 pb-4">
									<div className="-space-y-1.5">
										<h3 className="font-bold text-md text-slate-900 decoration-slate-700">
											Client Review & Feedback
										</h3>

										<p className="text-slate-400 font-bold text-sm">
											Web development
										</p>
									</div>

									<input
										className="input-checkbox rounded-full text-sky-700 p-2"
										type="checkbox"
									/>
								</div>

								<div className="flex items-center justify-between gap-2 pt-4">
									<p className="text-slate-400 font-bold text-xs">
										April 16, 10:00 PM - 10:30 PM
									</p>

									<div className="flex -space-x-2">
										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-4 divide-y divide-y-300/50 dark:divide-y-slate-900">
								<div className="flex items-center justify-between gap-2 pb-4">
									<div className="-space-y-1.5">
										<h3 className="font-bold text-md text-slate-900 decoration-slate-700">
											Client Review & Feedback
										</h3>

										<p className="text-slate-400 font-bold text-sm">
											Web development
										</p>
									</div>

									<input
										className="input-checkbox rounded-full text-sky-700 p-2"
										type="checkbox"
									/>
								</div>

								<div className="flex items-center justify-between gap-2 pt-4">
									<p className="text-slate-400 font-bold text-xs">
										April 16, 10:00 PM - 10:30 PM
									</p>

									<div className="flex -space-x-2">
										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-4 divide-y divide-y-300/50 dark:divide-y-slate-900">
								<div className="flex items-center justify-between gap-2 pb-4">
									<div className="-space-y-1.5">
										<h3 className="font-bold text-md text-slate-900 decoration-slate-700">
											Client Review & Feedback
										</h3>

										<p className="text-slate-400 font-bold text-sm">
											Web development
										</p>
									</div>

									<input
										className="input-checkbox rounded-full text-sky-700 p-2"
										type="checkbox"
									/>
								</div>

								<div className="flex items-center justify-between gap-2 pt-4">
									<p className="text-slate-400 font-bold text-xs">
										April 16, 10:00 PM - 10:30 PM
									</p>

									<div className="flex -space-x-2">
										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-xl p-4 divide-y divide-y-300/50 dark:divide-y-slate-900">
								<div className="flex items-center justify-between gap-2 pb-4">
									<div className="-space-y-1.5">
										<h3 className="font-bold text-md text-slate-900 decoration-slate-700">
											Client Review & Feedback
										</h3>

										<p className="text-slate-400 font-bold text-sm">
											Web development
										</p>
									</div>

									<input
										className="input-checkbox rounded-full text-sky-700 p-2"
										type="checkbox"
									/>
								</div>

								<div className="flex items-center justify-between gap-2 pt-4">
									<p className="text-slate-400 font-bold text-xs">
										April 16, 10:00 PM - 10:30 PM
									</p>

									<div className="flex -space-x-2">
										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-4 divide-y divide-y-300/50 dark:divide-y-slate-900">
								<div className="flex items-center justify-between gap-2 pb-4">
									<div className="-space-y-1.5">
										<h3 className="line-through font-bold text-md text-slate-900 decoration-slate-700">
											Client Review & Feedback
										</h3>

										<p className="text-slate-400 font-bold text-sm">
											Web development
										</p>
									</div>

									<input
										className="input-checkbox rounded-full text-sky-700 p-2"
										type="checkbox" checked readOnly
									/>
								</div>

								<div className="flex items-center justify-between gap-2 pt-4">
									<p className="text-slate-400 font-bold text-xs">
										April 16, 10:00 PM - 10:30 PM
									</p>

									<div className="flex -space-x-2">
										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-xl p-4 divide-y divide-y-300/50 dark:divide-y-slate-900">
								<div className="flex items-center justify-between gap-2 pb-4">
									<div className="-space-y-1.5">
										<h3 className="line-through font-bold text-md text-slate-900 decoration-slate-700">
											Client Review & Feedback
										</h3>

										<p className="text-slate-400 font-bold text-sm">
											Web development
										</p>
									</div>

									<input
										className="input-checkbox rounded-full text-sky-700 p-2"
										type="checkbox" checked readOnly
									/>
								</div>

								<div className="flex items-center justify-between gap-2 pt-4">
									<p className="text-slate-400 font-bold text-xs">
										April 16, 10:00 PM - 10:30 PM
									</p>

									<div className="flex -space-x-2">
										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>

										<Image
											className="rounded-full h-[40px] w-[40px] lg:h-[30px] lg:w-[30px] border-2 border-slate-300/50"
											src={user}
											alt=""
											height={30}
											width={30}
											quality={100}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default IndexTaskNotifications;
