"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "../ui/TestimonialCard";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
	{
		quote:
			"The improved user experience and accessible technical information have made a noticeable difference. The site redesign made exploring DeansListDAO's resources enjoyable and straightforward.",
		logo: "/images/logo/lulo.png", 
		company: "Lulo",
		description: "The modern way to grow your wealth.",
	},
	{
		quote:
			"The user experience enhancements and technical documentation have made DeansListDAO our go-to platform. It’s a significant improvement overall.",
		logo: "/images/logo/tensor.png",
		company: "Tensor",
		description: "Solana's Leading NFT Marketplace",
	},
	{
		quote:
			"DeansListDAO's focus on improving technical information access has simplified our research and integration process. It’s a more intuitive experience overall.",
		logo: "/images/logo/streamflow.png",
		company: "Streamflow",
		description: "Infrastructure for new Value Creation and Distribution.",
	},
	{
		quote:
			"With improved accessibility, DeansListDAO makes it easier to find exactly what we need.",
		logo: "/images/logo/gip.png",
		company: "Metrik",
		description: "Creative Agency",
	},
	{
		quote:
			"Noticeable improvement in the website's technical details makes it easy to navigate and make informed decisions.",
		logo: "/images/logo/orca.png",
		company: "Orca",
		description: "Trade tokens and provide liquidity on Solana.",
	},
	{
		quote:
			"The improved user experience and accessible technical information have made a noticeable difference. The site redesign made exploring DeansListDAO's resources enjoyable and straightforward.",
		logo: "/images/logo/meme.png", // Use actual paths from your public folder
		company: "Meme Royale",
		description: "The modern way to grow your wealth.",
	},
];

const Testimonials = () => {
	const topScrollingTestimonials = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
	const bottomScrollingTestimonials = [...testimonials.slice(3), ...testimonials.slice(3)];

	return (
		<div className="py-16 px-4 relative">
			<SectionHeader title="Testimonials" />
			<div className="md:text-center mb-12">
				<h2 className="text-white text-4xl font-bold">
					They say it <span className="font-light font-editorial-new">better</span> than we do!
				</h2>
				<p className="text-gray-300 mt-4">
					We&apos;re proud to be working with these incredible and outstanding
					projects, and thankful for their <br /> feedback, suggestions, and support.
				</p>
			</div>

			{/* Scrolling Cards */}
			<div className="overflow-hidden relative">
				<motion.div
					className="flex space-x-4 animate-scroll mb-4"
					initial={{ x: "0%" }}
					animate={{ x: "-50%" }}
					transition={{
						repeat: Infinity,
						duration: 20,
						ease: "linear",
						repeatDelay: 0,
						repeatType: "reverse",
					}}
				>
					{topScrollingTestimonials.map((testimonial, index) => (
						<TestimonialCard key={index} testimonial={testimonial} />
					))}
				</motion.div>
				<motion.div
					className="flex space-x-4 animate-scroll"
					initial={{ x: "-50%" }}
					animate={{ x: "0%" }}
					transition={{
						repeat: Infinity,
						duration: 20,
						ease: "linear",
						repeatDelay: 0,
						repeatType: "reverse",
					}}
				>
					{bottomScrollingTestimonials.map((testimonial, index) => (
						<TestimonialCard key={index} testimonial={testimonial} />
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Testimonials;