import React from 'react'
import Logo from './Logo'
import { NavLinks } from './NavLinks'

const Header = () => {
    return (
        <header className="px-20 bg-blue-50 z-50  w-full shadow-xl border-b">
            <nav className='relative z-50 flex justify-between py-4'>
                {/* Logo */}
                <div className='relative z-10'>
                    <Logo />
                </div>
                {/* NavLinks */}
                <div className='hidden lg:flex lg:gap-10 items-center'>
                    <NavLinks />
                </div>
            </nav>
        </header>
    )
}

export default Header
