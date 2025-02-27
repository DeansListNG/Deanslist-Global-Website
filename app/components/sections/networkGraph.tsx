"use client"
import React, { useState } from 'react';

const NetworkGraph: React.FC = () => {

    const [walletAddress, setWalletAddress] = useState<string>("");
    const [graphSrc, setGraphSrc] = useState<string>("");

    const loadGraph = () => {
        if (!walletAddress) {
            alert("Please enter a valid Solana wallet address.");
            return;
        }
        setGraphSrc(`https://widget.vybenetwork.com/network-graph?address=${walletAddress}&entity=wallet&connectionNode=program`);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          loadGraph();
        }
      };
    return (
        <>
            <div className='' >

                <div className='max-w-[1440px] mx-auto mt-10 px-5 md:px-0'>

                    <div>

                    <div className="flex flex-col items-center space-y-4">
                        {graphSrc && (
                            <iframe
                                id="vybeGraph"
                                src={graphSrc}
                                width="100%"
                                height="600px"
                                className="border-none"
                            ></iframe>
                        )}
                        
                        <input
                            type="text"
                            onKeyDown={handleKeyDown} // Listen for Enter key
                            value={walletAddress}
                            onChange={(e) => setWalletAddress(e.target.value)}
                            placeholder="Enter Solana Wallet Address"
                            className="border rounded p-2 w-[100%] text-center border-[#9A59BA]  bg-transparent "
                            />
                        <button
                            onClick={loadGraph}
                            className="bg-[#9A59BA80] overflow-hidden md:py-[10px] py-[10px] px-[27px] relative rounded-[10px] border border-[#9A59BA] font-medium hover:bg-purple-400 transition flex gap-2 items-center">
                            <span className="-left-[15px] absolute border-b-[2px] border-b-[#ffffff] md:h-[45px] h-[50px] blur-[2px] px-[82px] rounded-[20px] -z-10"></span>

                            Load Graph
                        </button>
                            </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default NetworkGraph;