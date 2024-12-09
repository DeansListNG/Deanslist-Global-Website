"use client";

import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';


const Events = () => {
	return (
		<section className=" py-20 relative " id="events">
			<SectionHeader title="Events" isLeft={false} />
			{/* Title Section */}
			<div className="md:text-center mb-12  px-5 md:px-0">
				<h2 className="text-4xl font-bold mb-4">Community <span className="font-light font-editorial-new">events</span> and <span className="font-light font-editorial-new">conferences</span>.</h2>
				<p className="text-lg max-w-3xl mx-auto">
					Stay informed on recent DAO events and gatherings featuring our members. Get exclusive recaps from our community&apos;s latest engagements.
				</p>
			</div>

			{/* Events Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1356px]  mx-auto px-6 ">
				{/* Card 1 */}
				<div className="border-[#3556F4] border-[2px] bg-gradient-to-br from-[#061295] from-15% to-100% to-[#9EA8D2] rounded-lg p-6 shadow-lg flex flex-col gap-4 pb-5 md:pb-1">
					<div className='flex flex-col items-center'>
						<h3 className="text-2xl font-bold mb-2">IslandDAOx</h3>
						<p className="text-sm mb-4">Everything you need to know about the event.</p>
					</div>

					<Carousel className="w-full h-full ">
						<CarouselContent>
							{[ "/images/events/event2.png", "/images/events/event1.png"].map((src, index) => (
								<CarouselItem key={index}>
									<div className="p-1 h-[308.41px] overflow-hidden rounded-md">
										<Image src={src} alt='event1' fill />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>

					<div className='grid grid-cols-1 md:grid-cols-[1fr,auto] text-sm items-center'>
						<p className="text-base mb-6">
							The community-run conference focused on DAOs and digital Governance Tools. Experience the highlights of AthensDAOx conference!
						</p>
						<a href="https://island-dao.com/" className='w-full' target="blank" rel="noopener noreferrer"><button className=" bg-[#0A1494] px-3 py-2 rounded-full w-full md:w-fit h-fit hover:bg-blue-600 transition shadow-2xl shadow-[#1a2ad9]">
							Explore the fun!
						</button>
						</a>
					</div>
				</div>

				{/* Card 2 */}
				<div className="border-[#0B2223]  border-[2px] bg-gradient-to-br from-[#061E1E] from-35% to-100% to-[#BFEAC5] rounded-lg p-6 shadow-lg flex flex-col gap-4  pb-5 md:pb-1">
					<div className='flex flex-col items-center'>
						<h3 className="text-2xl font-bold mb-2">IslandDAOx</h3>
						<p className="text-sm mb-4">Everything you need to know about the event.</p>
					</div>

					<Carousel className="w-full">
						<CarouselContent>
							{["/images/events/event1.png", "/images/events/event2.png"].map((src, index) => (
								<CarouselItem key={index}>
									<div className="p-1 md:h-[308.41px] h-[250.41px] overflow-hidden rounded-md">
										<Image src={src} alt='event1' fill />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>

					<div className=' grid grid-cols-1 md:grid-cols-[1fr,auto] md:gap-5 text-sm items-center'>
						<p className="text-base mb-6">
							A one month co-working event on the Island, Experience the highlights of IslandDAOx lives event! Presented by DeanslistDAO
						</p>
						<a href="https://island-dao.com/" target="blank" rel="noopener noreferrer" className="w-full"><button className="shadow2-2xl bg-[#081E20] px-3 py-2 rounded-full w-full md:w-fit h-fit hover:bg-gray-600 transition">
							Explore the fun!
						</button>
						</a>
					</div>
				</div>

			</div>
		</section>
	);
};

export default Events;