import React from 'react';

import avatar from '../../assets/images/avatar.png';
import { BiUserCircle } from 'react-icons/bi';
import { BsSmartwatch } from 'react-icons/bs';
import { SlEarphones } from 'react-icons/sl';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { AiFillYoutube,AiOutlineInstagram } from 'react-icons/ai';

const SecondBanner = () => {
	return (
		<div className="flex w-[90%] mx-auto justify-between my-20">
			<div className="bg-[#212F39] lg:w-[45%] rounded-3xl p-10 py-20">
				<h1 className="text-3xl mb-5">Amplify Your Earning Potential.</h1>
				<p className="text-[#dddddd] font-semibold mb-5">
					Our exceptional monetization tools allow you to turn your socials into a storefront and
					your followers into potential customers.
				</p>
				<h1 className="text-3xl mb-5">Say more, sell more, share more</h1>
				<p className="text-[#dddddd] font-semibold mb-5">
					Connect your followers to all you offer from your link in bio with a Superbio website.
				</p>
				<h1 className="text-3xl mb-5">Make it happen</h1>
				<p className="text-[#dddddd] font-semibold mb-5">
					Use an Superbio website to start, launch or grow business ideas, passion projects, and
					promotions.
				</p>
				<h1 className="text-3xl mb-5">Fun, easy, beautiful, instant</h1>
				<p className="text-[#dddddd] font-semibold mb-5">
					Make and update a Superbio website in minutes. No desktops, design, or web skills are
					needed!
				</p>
			</div>

			<div className="mr-40 pt-10 p-6 ">
				<div className="max-w-sm p-4 border-4 border-[#0082FF]  rounded-md shadow-md bg-white text-black">
					<img alt="" className="w-12 h-12 rounded-full mx-auto " src={avatar} />
					<h3 className="text-md text-center font-bold mt-5">Prime Beats</h3>
					<p className="text-center text-[#d4d4d6] font-bold">superbio.me/primebeats</p>
					<hr className="mt-2 shadow-md shadow-gray-500" />

					<div className="mt-5">
						<div className="flex items-center gap-2 ">
							<BiUserCircle /> <span className="font-bold">About</span>
						</div>

						<p className="mb-5 pl-4 text-[#666E7B]">
							Prime Beats is a company specialized in headphones technology and trends. Our
							objective is to create new dimensions of exceptional style and sound experience at all
							levels
						</p>
						<hr className="mb-5" />
					</div>

					<div>
						<div className="flex items-center gap-2 ">
							<BiUserCircle /> <span className="font-bold">Best Selling</span>
						</div>
						<div className="w-full p-4 flex items-center justify-between mb-5 bg-[#F1F2F6] rounded-lg mt-3">
							<h4 className="font-bold">Smart Watch</h4>
							<div>
								<BsSmartwatch />
							</div>
						</div>
						<div className="w-full p-4 flex items-center justify-between mb-4 bg-[#F1F2F6] rounded-lg mt-3">
							<h4 className="font-bold">Premium Earpods</h4>
							<div>
								<SlEarphones />
							</div>
						</div>

						<hr className="mb-5" />

						<div>
							<div className="flex items-center gap-2 ">
								<BiUserCircle /> <span className="font-bold">Follow Us</span>
							</div>

							<div className='mt-5 flex w-[80%] mx-auto justify-around'>
								<FaFacebookF className='text-blue-600 w-8 h-8 cursor-pointer hover:scale-110 duration-500' />
								<AiFillYoutube className='text-red-600 w-8 h-8 cursor-pointer hover:scale-110 duration-500' />
								<FaLinkedinIn className='text-blue-600 w-8 h-8 cursor-pointer hover:scale-110 duration-500' />
                                <AiOutlineInstagram className='text-[#D36096] w-8 h-8 cursor-pointer hover:scale-110 duration-500' />
							</div>
                                <hr className='mt-5' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondBanner;
