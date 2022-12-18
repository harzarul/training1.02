import React from 'react'
import { Button2, DiscoverCard } from '../components'
import { Discovers } from '../constants'

const Discover = () => {
  return (
    <section className='flex flex-col items-start justify-start my-[2rem]'>
      <div className='flex justify-between items-end w-full mb-[2rem]'>
        <div className='flex flex-col justify-start items-start'>
          <h1 className='text-[38px] text-white font-semibold'>
            Discover More NFTs
          </h1>
          <p className='text-[22px] text-white capitalize'>
            Explore New Trending NFTs
          </p>
        </div>
        <Button2 title='See All'/>
      </div>

      <div className='flex lg:flex-row flex-col flex-1 justify-between items-center w-full'>
        {Discovers.map((data,index) => (
          <DiscoverCard key={data.id} img={data.img}/>
        ))}
      </div>
    </section>
  )
}

export default Discover