import Image from 'next/image'
import logo from '/public/assets/SACNAS-logo.png'

export default function Crest() {
    return (
        <div>
            <div>
                <Image 
                    src={logo} 
                    alt='logo'
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}