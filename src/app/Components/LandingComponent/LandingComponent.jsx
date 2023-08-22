"use client"
import React from 'react'
import Wrapper from "../Wrapper/wrapper";
import HotelLists from '../Hotels/HotelLists';
import { filterData } from './DummyData';
import Image from 'next/image';

const LandingComponent = () => {
    return (
        <Wrapper>
            {/* <section className='flex gap-3 mt-4 overflow-scroll '>
                {
                    filterData?.map((d, i) => (
                        <div key={i} className='flex flex-col bg-purple-200 justify-center'>
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
            </section> */}
            <HotelLists />
        </Wrapper>
    )
}

export default LandingComponent
