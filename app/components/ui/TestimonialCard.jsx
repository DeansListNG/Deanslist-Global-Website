import { BadgeCheck } from "lucide-react";

const { default: Image } = require("next/image");

const TestimonialCard = ({ testimonial }) => {
	return (
		<div
			className="bg-gradient-to-tr from-[#2B153B] to-[#130821] text-white rounded-2xl shadow-md p-6 min-w-[300px] md:min-w-[500px] grid grid-rows-[1fr,fit] space-y-4"
		>
			<p className="text-lg">“{testimonial.quote}”</p>
			<div className="flex items-center space-x-4">
				{/* Use next/image here */}
				<div className="relative w-10 h-10">
					<Image
						src={testimonial.logo}
						alt={`${testimonial.company} logo`}
						layout="fill"
						objectFit="cover"
						className="rounded-full"
					/>
				</div>
				<div>
					<div className="flex gap-2 items-center">
						<h3 className="font-semibold">{testimonial.company}</h3>
						<img src="/images/checkbadge.svg" alt="badge" className="w-5 h-5" />
					</div>
					<p className="text-sm text-gray-300">{testimonial.description}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
