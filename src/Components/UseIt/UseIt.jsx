import React from 'react';

const UseIt = () => {
	return (
		<div className="lg:w-[85%] mx-auto bg-[#212F39] pl-14 pt-16 pb-10 rounded-3xl my-20 mt-[150px] mb-[80px]">
			<h1 className="text-5xl mb-9 font-bold">Use it anywhere</h1>
			<p className="mb-10 text-[#dddddd] text-[20px]">
				Take your Superbio link wherever your audience is, <br /> to help them to discover all your
				important content.
			</p>
			<button className=" text-xl text-white  py-3 px-12  bg-[#0082ff] hover:bg-[#0168c8] focus:ring-[#4ea4f4] focus:ring-offset-[#0082FF]   transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
				Sign Up Now
			</button>
		</div>
	);
};

export default UseIt;
