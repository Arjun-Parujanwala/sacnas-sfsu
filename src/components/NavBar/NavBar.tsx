'use client'
import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const toggleMenu = (): void => {
        if (isPageLoaded) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    useEffect(() => {
        const handlePageLoad = () => {
            setIsPageLoaded(true);
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
            return () => window.removeEventListener('load', handlePageLoad);
        }
    }, []);

    return (
        <div className="flex justify-end">
            <div className={styles.navbar}>
                <div className={`${styles.menu} ${isMenuOpen ? styles.active : styles.inactive}`} id="menu">
                    <Link href="/" onClick={toggleMenu}>Home</Link>
                    <Link href="/members" onClick={toggleMenu}>Members</Link>
                    <Link href="/events" onClick={toggleMenu}>Events</Link>
                    <Link href="/photos" onClick={toggleMenu}>Photos</Link>
                    <p>Contact</p>
                </div>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </button>
            </div>
        </div>
    )
}