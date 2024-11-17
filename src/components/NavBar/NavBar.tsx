'use client'
import Image from 'next/image'
import logo from '/public/assets/SACNAS-logo.jpg'
export default function NavBar() {

    return (
        <div className="flex flex-wrap my-5 ">
            <div className='flex w-full'>
                <Image src={logo.src} alt="SACNAS Logo" width={40} height={40} className=""/>
                <p className='flex justify-center font-helvetica font-bold text-2xl w-full absolute'>SACNAS AT SFSU</p>
            </div>
            <div className="flex flex-wrap justify-center items-center space-x-3 w-full font-helvetica">
                    <p>Members</p>
                    <p>Photos</p>
                    <p>Events</p>
                    <p>Contact</p>
            </div>
        </div>
    )
}

/*
Need to Do: routes to other pages
Also just some styling
Need to make sacnas logo have a transparent background
*/