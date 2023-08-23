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
            <section className='border border-gray-200 p-4 w-1/2 mx-auto my-4 rounded-xl'>
                <main className='flex items-center justify-between'>
                    <div className=' flex items-center'>
                        <h4 className='border-r-2 pr-3 font-bold'> Display total price</h4>
                        <h5 className='pl-3 text-[#9f9f9f]'> Includes all fees, before taxes</h5>
                    </div>
                    <div>
                        <input type="radio" />
                    </div>
                </main>
            </section>
            <HotelLists />
        </Wrapper>
    )
}

export default LandingComponent
