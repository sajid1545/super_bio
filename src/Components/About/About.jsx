import React from 'react';

const About = () => {
	return (
		<div className="">
			<div className="w-[85%] mx-auto bg-[#212F39] p-16  rounded-3xl relative mb-80">
				<h1 className="text-[40px] font-bold">About</h1>

				<div className="grid grid-cols-3 absolute gap-40 w-[80%] mt-5 mx-auto">
					<div className="bg-[#0F1C26] rounded-3xl p-5 w-[350px] ">
						<h1 className="text-4xl mb-5">Customize your Link</h1>
						<p className="font-bold text-[#dddddd]">
							Make your superbio pop. Embody your brand through custom colors, fonts and images.
						</p>
					</div>
					<div className="bg-[#0F1C26] rounded-3xl p-5 w-[350px] ">
						<h1 className="text-4xl mb-5">Analytics and Insights</h1>
						<p className="font-bold text-[#dddddd]">
							Gain valuable insight into your traffic and discover which content is performing with
							your audience.
						</p>
					</div>
					<div className="bg-[#0F1C26] rounded-3xl p-5 w-[350px] ">
						<h1 className="text-4xl mb-5">Powerful Third-Party Integrations</h1>
						<p className="font-bold text-[#dddddd]">
							Collect email subscribers, connect with third-party analytics and remarket to your
							audience.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
