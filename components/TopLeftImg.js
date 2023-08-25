//next image
import Image from 'next/image'
const TopLeftImg = () => {
    return (
        <div className='absolute letf-0 top-0 mix-blend-color-dodge z-0 w-[150px] xl:w-[300px] opacity-50'>
            <Image src='/and-fire-superior-esquerdo.png' width={500} height={500} alt='' />
        </div>
    );
};

export default TopLeftImg;
