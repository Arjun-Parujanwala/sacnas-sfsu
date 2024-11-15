'use client'

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
    )
}