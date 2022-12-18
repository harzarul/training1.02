
import styles from "../styles";
import {Button} from '../components';
import { HeroStats } from "../constants";
import { HeroIcon, HeroImg } from "../constants/images";


const Hero = () => {
  return (
    <section>
      <div className={`flex md:flex-row flex-col justify-center items-center py-2 ${styles.paddingsX}`}>
        <div className="flex flex-col items-start justify-center md:w-1/2 w-full">
          <h1 className="md:text-[67px] ss:text-[38px] text-[28px] text-white capitalize font-bold">
            Discover Digital Art & Collect NFTs
          </h1>
          <p className="md:text-[22px] text-[16px] text-white capitalize leading[2rem] mb-[2rem]">
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
          </p>
          <Button title='Get Started'/>
          <div className="md:flex hidden flex-row justify-between items-start my-[2rem]">
            {HeroStats.map((stat,index) => (
              <div className="flex flex-col items-start justify-start mr-[2rem]"
                key={stat.id}>
                <h1 className="md:text-[28px] text-[22px] text-white mb-1 font-semibold">
                  {stat.num}
                </h1>
                <p className="md:text-[20px] text-[16px] text-white  capitalize">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-start items-start p-[1rem] ml-[2rem] md:mt-0 mt-[1rem]">
            <div className="flex flex-col items-start justify-center">
              <img className="md:w-[510px] w-[330px]"
                src={HeroImg}
                alt="image" />
              <div className="flex flex-col items-start justify-start bg-dimGray md:w-[510px] w-[330px] py-[1.5rem] px-[1rem] rounded-b-xl">
                <h1 className="text-[22px] text-white capitalize mb-4">
                  Space Walking
                </h1>
                <div className="flex flex-row justify-start items-center">
                  <img className="w-[24px] h-[24px] mr-[10px]"
                    src={HeroIcon}
                    alt="icon" />
                  <p className="text-[14px] text-white">
                    AnimaKid
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div className="md:hidden flex flex-col justify-center items-center w-full">
          <div className="flex flex-row justify-start items-start my-[2rem] w-full">
            {HeroStats.map((stat,index) => (
              <div className="flex flex-col items-start justify-start mr-[2rem]"
                key={stat.id}>
                <h1 className="md:text-[28px] text-[22px] text-white mb-1 font-semibold">
                  {stat.num}
                </h1>
                <p className="md:text-[20px] text-[16px] text-white  capitalize">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero