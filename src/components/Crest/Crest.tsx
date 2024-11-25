import Image from 'next/image'
import logo from '/public/assets/SACNAS-logo.png'

export default function Crest() {
    return (
        <div className='flex justify-center p-4 lg:border-2 h-full'>
            <div>
                <Image 
                    src={logo} 
                    alt='logo'
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}