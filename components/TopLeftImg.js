//next image
import Image from 'next/image'
const TopLeftImg = () => {
    return (
        <div className='absolute letf-0 top-0 mix-blend-color-dodge z-10 w-[300pxpx] xl:w-[500px] opacity-50'>
            <Image src='/top-left-img.png' width={500} height={500} alt='' />
        </div>
    );
};

export default TopLeftImg;
