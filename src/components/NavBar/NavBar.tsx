'use client'

import Link from 'next/link'
export default function NavBar() {

    return (
        <div>
            <div>
                <p>@SFSU</p>
            </div>
            <div>
                    <Link href='./members'>
                        Members
                    </Link>
                    <Link href='./events'>
                        Events
                    </Link>
                    <Link href='./photos'>
                        Photos
                    </Link>
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