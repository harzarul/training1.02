import React from 'react'

const DiscoverCard = ({img}) => {
  return (
    <div className='flex flex-col justify-center items-start lg:m-0 m-3'>
        <img src={img} alt="image" />
        <div className='flex flex-col items-start justify-center bg-dimGray w-full rounded-b-3xl'>
            <div className='flex flex-col items-start justify-start w-full my-[2rem] px-[2rem]'>
                <h1 className='text-[22px] text-white mb-[1rem]'>
                    NFT Name
                </h1>
                <div className='flex justify-start items-center mb-[2rem]'>
                    <img className='w-[24px] h-[24px] mr-[1rem] rounded-full'
                        src={img}
                        alt="image" />
                    <p className='text-[16px] text-white'>
                        NFT Artist
                    </p>
                </div>
                <div className='flex justify-between items-start w-full mb-[1rem]'>
                    <p className='text-[12px] text-purple'>
                        Price
                    </p>
                    <p className='text-[12px] text-purple'>
                        Highest Bid
                    </p>
                </div>
                <div className='flex justify-between items-start w-full'>
                    <p className='text-[16px] text-white'>
                        1.63 ETH
                    </p>
                    <p className='text-[16px] text-white'>
                        0.33 wETH
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscoverCard