// next image
import Image from 'next/image';


const Bulb = () => {
    return (
        <div className='absolute -left-28 -bottom-12 w-[200px] xl:w-[260px] '>
            <Image
                src={'/bulb2.png'}
                width={260}
                height={200}
                className="w-full h-full mix-blend-color-dodge animate-pulse opacity-90"
                alt=""
            />
        </div>
    )
};

export default Bulb;
