



function Partners() {
	const partners = [
	  { img: "realms.png", name: "Realms", link: "https://www.realms.today" },
	  { img: "island.png", name: "IslandDAO", link: "https://island-dao.com"  },
	  { img: "pubkey.png", name: "Pubkey", link: "https://app.pubkey.link/"  },
	  { img: "solana.png", name: "Solana Foundation", link: "https://solana.com"  },
	  { img: "coloseum.png", name: "Colosseum", link: "https://www.colosseum.org/"  },
	  { img: "gib.png", name: "Gib.work", link: "https://gib.work"  },
	  { img: "anthensdao.png", name: "AthensDAOx", link: "https://x.com/athensdao"  },
	  { img: "waterloo.png", name: "University of Waterloo", link: "https://uwaterloo.ca/"  },
	  { img: "sec.png", name: "Sec3", link: "https://pro.sec3.dev/"  },
		{ img: "metaplex.png", name: "Metaplex", link: "https://www.metaplex.com/" },
	];
  
	return (
	  <div className="bg-[#1a0d2d] h-96 flex justify-center items-center text-white">
		<div className="w-[1000px] flex flex-col items-center">
		  <h6 className="text-white text-sm font-semibold mb-4">Partners</h6>
		  <h4 className="text-white text-2xl font-bold mb-4">
					Our <span className="font-light font-editorial-new">partners</span> are our strength
		  </h4>
		  <div className="overflow-hidden w-full">
			
			<div className="flex animate-scroll whitespace-nowrap">
			  
			  <ul className="flex items-center gap-8">
				{partners.map((partner, index) => (
				  <li
					key={index}
					className="flex items-center justify-between gap-4 px-4 py-2"
				  >
					<a href={partner.link} target="blank"  rel="noopener noreferrer"
        className="flex items-center gap-4">
					<img
					  src={partner.img}
					  alt={partner.name}
					  className="w-8 h-8 rounded-full"
					/>
					<span className="text-sm font-medium">{partner.name}</span></a>
				  </li>
				))}
			  </ul>
			  
			  <ul className="flex items-center gap-8 ml-6">
				{partners.map((partner, index) => (
				  <li
					key={`duplicate-${index}`}
					className="flex items-center justify-between gap-4 px-4 py-2"
				  >
					<img
					  src={partner.img}
					  alt={partner.name}
					  className="w-12 h-12 rounded-full"
					/>
					<span className="text-sm font-medium">{partner.name}</span>
				  </li>
				))}
			  </ul>
			</div>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default Partners;
  