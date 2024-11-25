'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div className="relative">
            <nav className="w-full flex justify-between items-center px-6 py-4 bg-gray-800 text-white z-10">
                {/* Hamburger Icon */}
                <button 
                    onClick={toggleMenu} 
                    className="block md:hidden text-2xl focus:outline-none"
                >
                    ☰
                </button>

                {/* Links */}
                <div 
                    className={`fixed md:static top-0 right-0 h-screen md:h-auto w-3/4 md:w-auto bg-gray-900 md:bg-transparent text-lg flex flex-col md:flex-row gap-4 items-center transition-transform duration-300 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
                    }`}
                >
                    <Link href="/" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-700 rounded">
                        Home
                    </Link>
                    <Link href="/members" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-700 rounded">
                        Members
                    </Link>
                    <Link href="/events" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-700 rounded">
                        Events
                    </Link>
                    <Link href="/photos" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-700 rounded">
                        Photos
                    </Link>
                    <p onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                        Contact
                    </p>
                </div>
            </nav>
        </div>
    );
}
