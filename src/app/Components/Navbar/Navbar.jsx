"use client"
import React, { useEffect, useState } from 'react';
import Wrapper from '../Wrapper/wrapper';
import Image from 'next/image';
import bac from '@/app/Components/Assets/airbnb-logo.png'
import Link from 'next/link';
import Menu from './Menu';
import { FiGlobe } from "react-icons/fi";
import { TbMenu2 } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import SearchTabs from './SearchTabs';
import { FiSearch } from "react-icons/fi";


const Navbar = () => {
    const [state, setState] = useState({
        show: "translate-y-0",
        lastScrollY: 0,

        openSearchBar: false,
        activeIndex: 1
    })

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > state?.lastScrollY && !state?.mobileMenu) {
                setState((prev) => {
                    return {
                        ...prev,
                        show: "-translate-y-[80px]",
                        openSearchBar: false
                    }
                })
            } else {
                setState((prev) => {
                    return {
                        ...prev,
                        show: "shadow-sm",
                    }
                })
            }

        } else {
            setState((prev) => {
                return {
                    ...prev,
                    show: "translate-y-0",
                }
            })
        }

        setState((prev) => {
            return {
                ...prev,
                lastScrollY: window.scrollY,
                // openSearchBar: window.scrollY > 100 ? false : state?.openSearchBar
            }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [state?.lastScrollY])

    const handleSearch = () => {
        setState((prev) => {
            return {
                ...prev,
                openSearchBar: !state.openSearchBar
            }
        })
    }

    const handleTabs = (data) => {
        setState((prev) => {
            return {
                ...prev,
                activeIndex: data
            }
        })
    }

    const { activeIndex } = state;
    return (
        <nav className='relative'>
            <header className={`w-full h-[50px] md:h-[80px] bg-[#ffffff]  flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${state.show}  ${!state.openSearchBar && "border border-gray-200"}`}>
                <Wrapper className='h-[60px] grid grid-cols-3 gap-3'>
                    {/* logo starts */}
                    <section className='flex items-center'>
                        <Link href='/'>
                            <Image
                                src={bac}
                                className='w-[60px] md:w-[100px]'
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                        </Link>

                    </section>
                    {/* logo ends */}

                    {/* middle menu start */}
                    {
                        state?.openSearchBar ? <SearchTabs handleTabs={handleTabs} activeIndex={activeIndex} /> :
                            <Menu handleSearch={handleSearch} />

                    }
                    {/* middle menu ends */}

                    {/* right menu start */}
                    <section className='hidden lg:flex items-center  justify-end  text-black'>
                        <div className='font-small cursor-pointer flex items-center hover:bg-black/[0.02] rounded-full px-5 py-3'>
                            Airbnb your home
                        </div>
                        <figure className='cursor-pointer flex items-center hover:bg-black/[0.02] rounded-full p-4'>
                            <FiGlobe size={18} />
                        </figure>
                        <div className='flex items-center gap-3  rounded-full p-[5px] pl-[12px] border hover:shadow-md'>
                            <figure className='cursor-pointer'>
                                <TbMenu2 size={18} />
                            </figure>
                            <figure className='cursor-pointer'>
                                <RiAccountCircleFill size={30} className='text-gray-500' />
                            </figure>
                        </div>
                    </section>
                    {/* right menu ends */}
                </Wrapper>
            </header>
            {
                state?.openSearchBar &&
                <div className='w-full h-[50px] md:h-[80px] bg-[#ffffff] absolute z-20 hidden lg:flex items-center justify-center' >
                    <section className='w-[50%] '>
                        <main className='grid grid-cols-3 gap-1 border  border-gray-300 rounded-full'>
                            <section className=' flex items-center justify-start'>
                                <div className='w-full px-[30px] py-[8px]  hover:bg-gray-100 hover:rounded-full cursor-pointer'>
                                    <h1 className='text-[14px] font-bold'>Where</h1>
                                    <p className='text-[12px] text-[#717171]'>Search destinations</p>
                                </div>
                            </section>
                            {
                                activeIndex === 1 &&
                                <section className='grid grid-cols-2 '>
                                    {/* <div className='h-[100%] w-[2px] bg-gray-400'>|</div> */}

                                    <main className=' px-[20px] py-[8px]  hover:bg-gray-100 hover:rounded-full cursor-pointer'>
                                        <h1 className='text-[14px] font-bold'> Check in</h1>
                                        <p className='text-[12px] text-[#717171]'>Add dates</p>
                                    </main>
                                    {/* <div className='h-[50%] w-[1px] bg-gray-300'></div> */}
                                    <main className='px-[20px] py-[8px]  hover:bg-gray-100 hover:rounded-full cursor-pointer'>
                                        <h1 className='text-[14px] font-bold'>Check out</h1>
                                        <p className='text-[12px] text-[#717171]'>Add dates</p>
                                    </main>
                                    {/* <div className='h-[50%] w-[1px] bg-gray-300'></div> */}
                                </section>
                            }
                            {
                                activeIndex === 2 &&
                                <section className='grid grid-cols-1'>
                                    <main className=' px-[20px] py-[8px]  hover:bg-gray-100 hover:rounded-full cursor-pointer'>
                                        <h1 className='text-[14px] font-bold'> Date</h1>
                                        <p className='text-[12px] text-[#717171]'>Add dates</p>
                                    </main>

                                </section>
                            }
                            <section className=' flex items-center justify-start'>
                                <div className=' flex items-center justify-between w-full px-[12px] py-[8px]  hover:bg-gray-200 hover:rounded-full cursor-pointer'>
                                    <div className='pl-[8px]'>
                                        <h1 className='text-[14px] font-bold'>Who</h1>
                                        <p className='text-[12px] text-[#717171]'>Add guest</p>
                                    </div>
                                    <figure className='p-2 bg-[#ff3853] rounded-full cursor-pointer hover:shadow-lg' onClick={() => handleSearch()}>
                                        <FiSearch size={14} className='text-white' />
                                    </figure>
                                </div>
                            </section>
                        </main>
                    </section>
                </div>
            }
        </nav>
    )
}

export default Navbar;
