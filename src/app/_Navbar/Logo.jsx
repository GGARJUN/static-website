
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={"/"}>
            <h2 className='text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300'>
                DummyLogo
            </h2>
        </Link>
    )
}

export default Logo
