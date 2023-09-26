// next image
import Image from 'next/image';


const Bulb = () => {
    return (
        <div className=''>
            <Image
                src={'/bulb.png'}
                width={260}
                height={200}
                className="w-full h-full mix-blend-soft-light animate-pulse"
                alt=""
            />
        </div>
    )
};

export default Bulb;
