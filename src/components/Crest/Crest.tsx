import Image from 'next/image'
import logo from '/public/assets/SACNAS-logo.png'

export default function Crest() {
    return (
        <div className="flex justify-center w-full">
            <Image src={logo} alt='logo' />
        </div>
    )
}