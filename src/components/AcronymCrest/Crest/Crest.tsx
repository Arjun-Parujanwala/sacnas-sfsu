import Image from 'next/image'
import logo from '/public/assets/SACNAS-logo.png'

export default function Crest() {
    return (
        <div className="flex justify-center items-center sm:w-full md:w-1/3 md:ml-10">
            <div className="flex justify-center items-center sm:w-1/3 md:w-full">
                <Image 
                    src={logo} 
                    alt='logo'
                    className='object-contain w-full h-full'
                />
            </div>
        </div>
    )
}