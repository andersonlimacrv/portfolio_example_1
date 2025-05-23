// next image
import Image from "next/image";

const AvatarAstro = () => {
    return (
        <div className='hidden xl:flex xl:max-w-none'>
            <Image
                src={'/avatar2.png'}
                width={737}
                height={678}
                alt=''
                className='translate-z-0 w-full h-full' />
        </div>
    );

};

export default AvatarAstro;
