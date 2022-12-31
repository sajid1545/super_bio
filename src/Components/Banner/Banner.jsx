import React from 'react';

import bannerImage from '../../assets/images/banner-image.png';
import bannerLogo from '../../assets/images/banner-logo.png';

const Banner = () => {
	return (
		<div className="">
			<div className="flex items-center justify-between flex-col-reverse sm:flex-row gap-10 sm:gap-0">
				<div className="lg:w-[50%] bg-[#0F1C26] rounded-tr-2xl rounded-br-2xl border-l-8 border-[#0082FF] ">
					<h1 className="text-[50px] px-20 py-10 pt-10 font-bold text-center sm:text-left">
						Turn Followers into Customers.
					</h1>
					<p className="px-20 pb-10 font-semibold text-center sm:text-left">
						Create your custom storefront for your audiences with just one bio link. Your followers
						will never have to leave your socials to access everything you have to offer.
					</p>
					<div className="px-10 pb-10">
						<button
							className=" text-xl text-white ml-10 py-4 px-12   bg-[#0082FF] hover:bg-[#0168c8] focus:ring-[#4ea4f4] focus:ring-offset-[#0082FF]   transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
							aria-label="Sign up"
							title="Sign up">
							Sign Up Now
						</button>
					</div>
				</div>
				<div>
					<img src={bannerImage} alt="" className="mr-40" />
				</div>
			</div>

			<div className="mt-24 sm:flex justify-end mb-10 hidden ">
				<img src={bannerLogo} alt="" />
			</div>
		</div>
	);
};

export default Banner;
