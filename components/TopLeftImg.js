//next image
import Image from 'next/image'
const TopLeftImg = () => {
    return (
        <div className='absolute letf-0 top-0 mix-blend-color- z-0 w-[150px] xl:w-[300px] opacity-50 p-3'>
            <Image src='/logo-ruim.png' width={90} height={90} alt='' />
        </div>
    );
};

export default TopLeftImg;
