import React from 'react'
import WorkCard from '../components/WorkCard'
import { Works } from '../constants'

const How = () => {
  return (
    <section className='flex flex-col justify-start items-start my-[2rem]'>
      <div className='flex flex-col items-start justify-start'>
        <h1 className='md:text-[38px] text-[28px] text-white font-semibold'>
          How it Works
        </h1>
        <p className='text-[14px] text-white'>
          Find Out How To Get Started
        </p>
      </div>

      <div className='flex md:flex-row flex-col justify-around items-center w-full'>
        {Works.map((data,index) => (
          <WorkCard key={index}
            img={data.img}
            head={data.head}
            text={data.text}/>
        ))}
      </div>
    </section>
  )
}

export default How