
import { Button, Button2 } from "../components";
import styles from "../styles";
import { TopIcon1 } from "../constants/images";

const Highlight = () => {
  return (
    <section className='flex items-center justify-center bg-fixed highlight__background'>
      <div className=' h-[65vh] w-[100vw] overlay flex md:flex-row flex-col  justify-center md:items-end items-center py-[6rem]'>
        <div className={`${styles.boxWidth} flex flex-col items-start justify-end h-full ml-[2rem] md:mb-0 mb-[2rem]`}>
          <div className="w-[151px] h-[44px] rounded-full py-1 px-3 flex justify-around items-center bg-gray mb-[2rem]">
            <img className="w-[24px] h-[24px]"
              src={TopIcon1}
              alt="icon" />
            <p className="text-[14px] text-white">
              Shroomie
            </p>
          </div>
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-[41px] text-white capitalize mb-[1rem]">
                Magic Mushroom
              </h1>
              <Button2 title='See NFT'/>
            </div>
          </div>
        </div>

        <div className="w-295px h-144px rounded-lg py-[1rem] px-[1.2rem] flex flex-col items-start justify-end bg-black">
          <p className="text-[12px] text-white">
            Auction Ends In :
          </p>
          <div className="flex justify-start items-center">
            <h1 className="text-[38px] text-white">
              59
            </h1>
            <h1 className="text-[38px] text-white">
              :
            </h1>
            <h1 className="text-[38px] text-white">
              59
            </h1>
            <h1 className="text-[38px] text-white">
              :
            </h1>
            <h1 className="text-[38px] text-white">
              59
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-white mr-3">
              Hours
            </p>
            <p className="text-[12px] text-white mr-5">
              Minutets
            </p>
            <p className="text-[12px] text-white mr-2">
              Seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlight