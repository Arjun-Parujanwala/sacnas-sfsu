'use client'
import Image from 'next/image'
import logo from '/public/assets/SACNAS-logo.jpg'
export default function NavBar() {

    return (
        <div className="flex flex-wrap mt-5 border-2">
            <div className='flex px-5 space-x-2 border-2 w-full'>
                <Image src={logo.src} alt="SACNAS Logo" width={40} height={40} className=""/>
                <p className='font-helvetica text-2xl w-full h-full border-2 border-red-600'>SACNAS AT SFSU</p>
            </div>
            <div className="flex flex-wrap justify-content items-center border-2 space-x-3 w-full px-5 font-helvetica">
                <p>About</p>
                <p>Members</p>
                <p>Photos</p>
                <p>Events</p>
                <p>Contact</p>
            </div>
        </div>
    )
}