
import { BiRocket } from 'react-icons/bi';

const Button2 = ({title}) => {
  return (
    <button className='flex justify-center items-center border-solid border-2 border-purple py-[1.2rem] px-[2rem] rounded-3xl text-white w-[247px]'>
        <BiRocket className='mr-3'/> {title}
    </button>
  )
}

export default Button2