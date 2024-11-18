'use client'
export default function NavBar() {

    return (
        <div className="flex m-5 bottom-2 space-x-2">
            <div className='relative flex'>
                <p className='font-helvetica font-bold text-2xl'>
                    @ <span className="text-purple-800">SFSU</span>
                    </p>
            </div>
            <div className="flex space-x-2 pt-2 font-helvetica">
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