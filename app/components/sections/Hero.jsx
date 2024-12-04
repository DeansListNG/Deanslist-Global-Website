import { CircleArrowUp } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function Hero() {
	return (
		<div className="pt-20 px-4 text-center flex flex-col items-center">
			{/* Badge Section */}
			<div className="flex justify-center items-center space-x-4 mb-6 bg-purple-500 p-1 rounded-full cursor-pointer">
				<span className="bg-white text-purple-500 text-sm py-1 px-3 rounded-full">
					New feature
				</span>
				<p
					className="flex gap-2 items-center"
				>
					Check out the Realms dashboard <ArrowRight size={16} />
				</p>
			</div>

			{/* Main Title */}
			<h1 className="text-4xl md:text-5xl font-bold mb-4">
				<p >Web3 Native <span className="italic font-light">Network State</span>, </p>
				<p>Solana&rsquo;s Most Dedicated Power Users.</p>
			</h1>

			{/* Subtitle */}
			<p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
				Dean&rsquo;s List connects Web3 expertise with Solana protocols, driving
				ecosystem growth and elevating user experiences.
			</p>

			{/* Buttons */}
			<div className="flex justify-center space-x-4">
				<button className="bg-purple-500 py-2 px-6 rounded-lg font-medium hover:bg-purple-600 transition flex gap-2 items-center">
					<CircleArrowUp />
					Get Started
				</button>
				<button className="text-white py-2 px-6 rounded-lg font-medium hover:bg-white hover:text-purple-900 transition flex gap-2 items-center">
					Learn more <ArrowDown />
				</button>
			</div>

			<div className="w-full flex justify-center mt-16 overflow-hidden h-[320px]">
				<div className="w-[1024px] h-[1024px] rounded-full border-t-8 border-[#351A45]">
					<img src="/continents.png" className="w-full" />
				</div>
			</div>
		</div>
	);
}

export default Hero;