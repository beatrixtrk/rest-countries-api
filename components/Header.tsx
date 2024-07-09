import React, { FC } from 'react'
import ThemeToggler from './ThemeToggler'

const Header: FC = () => {
    return (
        <header className='flex items-center justify-between p-4 md:px-[80px] md:py-8 bg-card shadow-header dark:shadow-dark-header'>
            <h1 className='text-sm md:text-2xl font-extrabold'>Where in the world?</h1>
            <ThemeToggler />
        </header>
    )
}

export default Header