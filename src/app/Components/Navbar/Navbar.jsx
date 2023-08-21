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
import { filterData } from './FilterDummyData';

const Navbar = () => {
    const [state, setState] = useState({
        show: "translate-y-0",
        lastScrollY: 0,
    })

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > state?.lastScrollY && !state?.mobileMenu) {

                setState((prev) => {
                    return {
                        ...prev,
                        show: "-translate-y-[80px]"
                    }
                })
            } else {
                setState((prev) => {
                    return {
                        ...prev,
                        show: "shadow-sm"
                    }
                })
            }

        } else {
            setState((prev) => {
                return {
                    ...prev,
                    show: "translate-y-0"
                }
            })
        }

        setState((prev) => {
            return {
                ...prev,
                lastScrollY: window.scrollY
            }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [state?.lastScrollY])

    console.log('filterData', filterData)
    return (
        <>
            <header className={`w-full h-[50px] md:h-[80px] bg-[#ffffff]  flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${state.show} border border-gray-200`}>
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
                    <Menu />
                    {/* middle menu ends */}

                    {/* right menu start */}
                    <section className='hidden lg:flex items-center  justify-end  text-black'>
                        <div className='font-small cursor-pointer flex items-center hover:bg-black/[0.02] rounded-full px-5 py-3'>
                            Airbnb your home
                        </div>
                        <figure className='cursor-pointer flex items-center hover:bg-black/[0.02] rounded-full p-4'>
                            <FiGlobe size={18} />
                        </figure>
                        <div className='flex items-center gap-3  rounded-full p-[5px] border hover:shadow-md'>
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
            <Wrapper>
                <section className='flex gap-3 mt-4 overflow-scroll '>
                    {
                        filterData?.map((d, i) => (
                            <div key={i} className='flex flex-col bg-purple-300 justify-center'>
                                <Image
                                    src={d?.icon?.src}
                                    className='w-[30px] md:w-[40px]'
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                />
                                {d?.name}
                            </div>
                        ))
                    }
                </section>
            </Wrapper>
        </>
    )
}

export default Navbar;
