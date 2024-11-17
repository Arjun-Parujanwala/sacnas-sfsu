import Image from 'next/image'
import logo from '/public/assets/SACNAS-logo.png'
export default function AboutUs() {
    return (
        <div className="text-3xl m-5 font-helvetica">
            <p><span className="font-bold text-yellow-500 underline">S</span>ociety for the</p>
            <p><span className="font-bold text-yellow-500 underline">A</span>dvancement of</p>
            <p><span className="font-bold text-yellow-500 underline">C</span>hicanos/Hispanics and</p>
            <p><span className="font-bold text-yellow-500 underline">N</span>ative</p>
            <p><span className="font-bold text-yellow-500 underline">A</span>mericans in</p>
            <p><span className="font-bold text-yellow-500 underline">S</span>cience</p>
            <Image src={logo} alt="SACNAS Logo" />
        </div>
    )
}