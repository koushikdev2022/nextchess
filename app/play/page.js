import { Poppins } from 'next/font/google';
import Image from 'next/image';
import chessPic from '../assets/imagesource/chessPic.png'
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // specify desired weights
    display: 'swap',
});
const play = () => {
    return (
        <>
            <div className='flex justify-center content-center'>
                <Image src={chessPic} alt="chessImage" />
            </div>
        </>
    )
}
export default play;