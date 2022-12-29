import React from 'react';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="w-[85%] mx-auto bg-[#212F39] p-10 rounded-3xl relative mb-40">
			<footer>
				<div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8 relative ">
					<div className="grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-4 ">
						<div className="mr-20">
							<p className="font-bold text-3xl ">Super Bio</p>

							<nav className="mt-6">
								<ul className="space-y-4 text-lg font-semibold">
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											Supercharge your Link in Bio
										</a>
									</li>
								</ul>
							</nav>
						</div>

						<div className="ml-20">
							<p className="font-bold text-3xl">Get Started</p>

							<nav className="mt-6">
								<ul className="space-y-4 text-lg font-semibold">
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											Sign Up for Free
										</a>
									</li>
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											Sign In
										</a>
									</li>
								</ul>
							</nav>
						</div>

						<div className="ml-10">
							<p className="font-bold text-3xl">Company</p>

							<nav className="mt-6">
								<ul className="space-y-4 text-lg font-semibold">
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											Blog
										</a>
									</li>
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											About
										</a>
									</li>
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											Careers
										</a>
									</li>
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											Contact
										</a>
									</li>
								</ul>
							</nav>
						</div>

						<div>
							<p className="font-bold text-4xl">Legal</p>

							<nav className="mt-6">
								<ul className="space-y-4 text-lg font-semibold">
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											Terms & Conditions
										</a>
									</li>
									<li>
										<a href="#" className=" text-[#dddddd] transition hover:opacity-75">
											Privacy Policy
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<div className="bg-[#0F1C26] p-10 flex justify-evenly gap-16 items-center rounded-3xl absolute w-[93%] right-[45px]">
					<div>
						<h3 className="text-2xl font-bold">Mobile: 12345678</h3>
					</div>
					<div>
						<h3 className="text-2xl font-bold">Email: hello@superBio</h3>
					</div>

					<div>
						<div className="mt-5 flex w-[80%] mx-auto justify-around items-center gap-4">
							<AiFillYoutube className=" w-10 h-7 cursor-pointer hover:scale-110 duration-500" />
							<FaLinkedinIn className=" w-10 h-7 cursor-pointer hover:scale-110 duration-500" />
						</div>
					</div>

					<div>
						<h3 className="text-2xl font-bold">©2021 SuperBio.</h3>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
