import React from 'react';

const PrimaryButton = ({ children }) => {
	return (
		<div>
			<button
				className=" text-2xl text-white ml-10 py-2 px-4  bg-[#0082FF] hover:bg-[#0168c8] focus:ring-[#4ea4f4] focus:ring-offset-[#0082FF]  w-full transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
				aria-label="Sign up"
				title="Sign up">
				{children}
			</button>
		</div>
	);
};

export default PrimaryButton;
