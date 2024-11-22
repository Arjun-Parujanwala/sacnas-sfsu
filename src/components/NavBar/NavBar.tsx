'use client'
import React, { useState } from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex justify-end">
            <div className={styles.navbar}>
                <div className={`${styles.menu} ${isMenuOpen ? styles.active : styles.inactive}`} id="menu">
                    <Link href="/">Home</Link>
                    <Link href="/members">Members</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/photos">Photos</Link>
                    <p>Contact</p>
                </div>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </button>
            </div>
        </div>
    )
}