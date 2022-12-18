
import { Button } from "../components";
import { SubImg } from "../constants/images";

const Subscribe = () => {
  return (
    <section className='flex md:flex-row flex-col justify-center items-center my-[1rem] mx-[2rem] p-[1rem] bg-dimGray rounded-xl'>
      <img className="md:w-[425px] w-[350px] md:h-[310px] h-[250px] md:mb-0 mb-4"
        src={SubImg}
        alt="image" />
      
      <div className="flex flex-col items-start justify-start lg:ml-[8rem] ml-[2rem]">
        <h1 className="lg:text-[38px] text-[28px] text-white">
          Join Our Weekly Digest
        </h1>
        <p className="lg:text-[22px] text-[16px] text-white mb-[2rem]">
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <div className="flex lg:flex-row flex-col  justify-start lg:items-center items-start w-full">
          <input className="mr-[4rem] text-[16px] text-black px-4 py-2 rounded-xl lg:mb-0 mb-4 w-full"
            type="text"
            placeholder="Enter Your Email"/>
          <Button title='Subscribe'/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe