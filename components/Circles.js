//next image
import Image from 'next/image';

const Circles = () => {
    return (
        <div className='w-[150px] xl:w-[250px] absolute right-0 -bottom-0 mix-blend-multiply animate-pulse duration-75 z-10'>
            <Image
                src="/circuit_3.png"
                width={260}
                height={200}
                className="w-full h-full"
                alt=""
            />
        </div>
    )
};

export default Circles;
