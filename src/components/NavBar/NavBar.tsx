'use client'
import Image from 'next/image'
import logo from '/public/assets/SACNAS-logo.jpg'
export default function NavBar() {

    const navItems = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Members',
            href: '/members'
        },
        {
            name: 'Photos',
            href: '/photos'
        },
        {
            name: 'Events',
            href: '/events'
        },
        {
            name: 'Contact',
            href: '/contact'
        },
    ]
    return (
        <div className="flex mt-10 border-2">
            <div className='flex px-10 space-x-2'>
                <Image src={logo.src} alt="SACNAS Logo" width={40} height={40} />
                <p className='font-helvetica mt-1'>SACNAS AT SFSU</p>
            </div>
            <div className="flex absolute justify-center border-2 space-x-4 px-20 left-1/2 transform -translate-x-1/2 rounded-3xl">
                {
                    navItems.map((item, index) => {
                        return (
                            <div key={index} className="">
                                <a key={index} href={item.href}>{item.name}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}