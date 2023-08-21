import React from 'react'
import { Fragment } from 'react';
// import { BsSearch } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";


const Menu = () => {
    return (
        <section className='hidden lg:flex items-center justify-between  shadow  rounded-full px-[15px] border'>
            <main className='cursor-pointer text-black font-small border-r-2 px-4'>
                <p className=''>
                    Anywhere
                </p>
            </main>
            <main className='cursor-pointer text-black font-small border-r-2 px-4'>
                <p className=''>
                    Any week
                </p>
            </main>
            <main className='cursor-pointer text-black font-small px-4'>
                <p className='text-gray-500'>
                    Add guests
                </p>
            </main>
            <figure className='p-2 bg-[#ff3853] rounded-full cursor-pointer hover:shadow-lg'>
                <FiSearch size={14} className='text-white' />
            </figure>
        </section>
    )
}

export default Menu


