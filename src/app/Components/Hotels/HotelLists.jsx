import React from 'react';
import HotelCard from './HotelCard';
import { hotelsData } from '../LandingComponent/DummyData'
import Image from 'next/image';
import { BsFillStarFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import Link from 'next/link';

const HotelLists = () => {
    return (
        <section className='mt-5'>
            <main className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                {
                    hotelsData.map((d, i) => (
                        <HotelCard data={d} key={i} />
                    ))
                }
            </main>
        </section>
    )
}

export default HotelLists
