import React from 'react';

const PrimaryButton = ({ children }) => {
	return (
		<div>
			<button
				class=" text-2xl text-white ml-10 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200  w-full transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
				aria-label="Sign up"
				title="Sign up">
				{children}
			</button>
		</div>
	);
};

export default PrimaryButton;
