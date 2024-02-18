"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const route = useRouter();

	const { register, handleSubmit } = useForm();

	const onSubmit = async (data: any) => {
		const { phone, password } = data;

		try {
			// our login logic
			const res = await signIn("credentials", {
				phone,
				password,
				redirect: false, // Set to false to handle redirection manually
			});

			if (res?.error) {
				toast.error("البيانات غير صحيحة");
			} else {
				toast.success("تم تسجيل الدخول بنجاح");
				setTimeout(() => route.push("/#coursesSection"), 750);
			}
		} catch (error) {
			toast.error("حدثت مشكلة أثناء تسجيل الدخول");
		}
	};

	return (
		<form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
			<div>
				<label htmlFor="email"> Email : </label>
				<input
					className=""
					type="email"
					required
					id="email"
					defaultValue=""
					{...register("email")}
				/>
			</div>
			<div>
				<label htmlFor="password"> password : </label>
				<input
					className=""
					type="password"
					required
					id="password"
					defaultValue=""
					{...register("password")}
				/>
			</div>
		</form>
	);
	{
		/* <div className="space-y-6">
				<div>
					<div className="space-y-12">
						<div className="">
							<div className="form-reg__group undefined false ">
								<input
									className="smooth z-10"
									type="text"
									required
									id="phone"
									defaultValue=""
									{...register("phone")}
								/>
								<span className="bg" />
								<span className="highlight" />
								<span className="bar" />
								<label>
									<div className="flex flex-row flex-wrap space-x-2 space-x-reverse sm:space-x-reverse md:space-x-reverse lg:space-x-reverse">
										<span className="flex-center-both trasnform -translate-y-px text-[#F9C500]">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlnsXlink="http://www.w3.org/1999/xlink"
												aria-hidden="true"
												role="img"
												className="iconify iconify--ant-design"
												width="1em"
												height="1em"
												preserveAspectRatio="xMidYMid meet"
												viewBox="0 0 1024 1024"
											>
												<path
													fill="currentColor"
													d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553A395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4c7.3 0 14.3-.6 21.2-1.8c134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"
												/>
											</svg>
										</span>
										<span className="font-semibold">رقم الهاتف</span>
									</div>
								</label>
							</div>
						</div>
						<div className="">
							<div className="form-reg__group undefined false ">
								<input
									className="smooth z-10"
									type="password"
									required
									id="password"
									defaultValue=""
									{...register("password")}
								/>
								<span className="bg" />
								<span className="highlight" />
								<span className="bar" />
								<label>
									<div className="flex flex-row flex-wrap space-x-2 space-x-reverse sm:space-x-reverse md:space-x-reverse lg:space-x-reverse">
										<span className="flex-center-both trasnform -translate-y-px  text-[#F9C500]">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlnsXlink="http://www.w3.org/1999/xlink"
												aria-hidden="true"
												role="img"
												className="iconify iconify--ri"
												width="1em"
												height="1em"
												preserveAspectRatio="xMidYMid meet"
												viewBox="0 0 24 24"
											>
												<path
													fill="currentColor"
													d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1Zm-2 0V7a4 4 0 0 0-8 0v1h8Zm-5 6v2h2v-2h-2Zm-4 0v2h2v-2H7Zm8 0v2h2v-2h-2Z"
												/>
											</svg>
										</span>
										<span className="font-semibold">كلمة السر</span>
									</div>
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="flex">
					<button
						className="bg-color mx-4 min-w-max rounded-[25px] bg-[#F9C500] px-10 py-4 text-[#000] transition duration-300 ease-in-out hover:bg-[#FFF] max-sm:px-5"
						type="submit"
					>
						تسجيل الدخول
					</button>
				</div>
			</div> */
	}
};

export default LoginForm;
