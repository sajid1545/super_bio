import React from 'react';
import free from '../../assets/images/free.png';

const TryForFree = () => {
	return (
		<div className="lg:w-[85%] mx-auto bg-[#212F39] py-16 px-12 rounded-3xl my-20 flex items-center justify-center flex-col sm:flex-row">
			<img src={free} alt="" className="cursor-pointer  hover:scale-105 ease-in duration-500" />
			<div className="sm:ml-40">
				<h1 className="text-[40px] mb-5 mt-10 sm:mt-0 font-bold">Try it for free</h1>
				<p className="text-[#dddddd] font-bold lg:w-[80%] text-xl">
					Create your own meaningful link in bio today for free. Join for free!
				</p>
				<button className=" text-xl text-white  py-2 px-10 mt-10  bg-[#0082ff] hover:bg-[#0168c8] focus:ring-[#4ea4f4] focus:ring-offset-[#0082FF]   transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default TryForFree;
