import React from 'react'
import { FiSearch } from "react-icons/fi";

const Menu = ({ handleSearch }) => {

    return (
        <section className='hidden lg:flex items-center justify-between  shadow  rounded-full px-[15px] border'>
            <main className='cursor-pointer text-black font-small  px-4'>
                <p className='font-bold' >
                    Anywhere
                </p>
            </main>
            <div className='h-[50%] w-[1px] bg-gray-300'></div>
            <main className='cursor-pointer text-black font-small  px-4'>
                <p className='font-bold'>
                    Any week
                </p>
            </main>
            <div className='h-[50%] w-[1px] bg-gray-300'></div>
            <main className='cursor-pointer text-black font-small px-4'>
                <p className='text-gray-500 font-bold'>
                    Add guests
                </p>
            </main>
            <figure className='p-2 bg-[#ff3853] rounded-full cursor-pointer hover:shadow-lg' onClick={() => handleSearch()}>
                <FiSearch size={14} className='text-white' />
            </figure>
        </section>
    )
}

export default Menu


