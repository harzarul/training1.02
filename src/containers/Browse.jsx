
import { Cates } from "../constants"

const Browse = () => {
  return (
    <section className='flex flex-col items-start justify-start my-[2rem]'>
      <h1 className='text-[38px] text-white font-bold capitalize'>
        Browse Caegories
      </h1>

      <div className='grid sm:grid-cols-4 grid-cols-2 sm:grid-rows-2 grid-rows-4 gap-1 w-full'>
        {Cates.map((data,index) => (
          <div className="flex flex-col justify-center items-center lg:w-fit w-[160px] mb-[2rem]">
            <img src={data.img} alt="img" />
            <div className="bg-dimGray px-2 flex justify-start items-start w-full rounded-b-3xl">
              <h1 className="lg:text-[22px] text-[16px] text-white px-[1rem] py-[1.2rem]">
                {data.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Browse