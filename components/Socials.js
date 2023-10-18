//links
import Link from 'next/link';

//icons 
import { RiInstagramLine, RiMailSendLine, RiGithubLine, RiWhatsappLine, RiLinkedinFill, RiCodepenFill } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';

const Socials = () => {
    return (
        <div className='flex items-center gap-x-5 text-2xl sm:text-3xl lg:mr-[60px]'>
            <Link href={'https://linkedin.com/in/andersonlimacrv'} target="_blank" className='hover:text-accent transition-all duration-300' >
                <RiLinkedinFill />
            </Link>
            <Link href={'https://github.com/andersonlimacrv'} target="_blank" className='hover:text-accent transition-all duration-300' >
                <RiGithubLine />
            </Link>
            <Link href={'mailto:andersonlimacrv@gmail.com?subject=Contato%20pelo%20Curriculo&body=Tenho%20Interesse%20em%20contrata-lo!'} target="_blank" className='hover:text-accent transition-all duration-300' >
                <RiMailSendLine />
            </Link>
            <Link href={'https://api.whatsapp.com/send?phone=5553981004874&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20seu%20n%C3%BAmero%20anexado%20ao%20curr%C3%ADculo.'} target="_blank" className='hover:text-accent transition-all duration-300' >
                <RiWhatsappLine />
            </Link>
            <Link href={'https://www.instagram.com/andersonlimacrv/'} target="_blank" className='hover:text-accent transition-all duration-300' >
                <RiInstagramLine />
            </Link>
            <Link href={'https://www.allcode.app/'} target="_blank" className='hover:text-accent transition-all duration-300' >
                <BiWorld />
            </Link>
            <Link href={'https://codepen.io/andersonlimacrv/'} target="_blank" className='hover:text-accent transition-all duration-300' >
                <RiCodepenFill />
            </Link>

        </div>
    );
};

export default Socials;
