import React from 'react'
import Image from 'next/image';
import { BsFillStarFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
// import Link from 'next/link';

const HotelCard = ({ data, keyId }) => {
    return (
        <section key={keyId} className='w-full relative cursor-pointer group'>
            <Image
                src={data?.image}
                className='w-full rounded-2xl h-[250px] object-cover'
                alt="Picture of the Hotel"
                width={100}
                height={100}
            />
            <figure className='absolute top-5 right-5'>
                <FcLike size={25} />
            </figure>
            <section className='flex items-center justify-between mt-2 text-[#000]'>
                <h1 className='font-bold'>{data?.place}</h1>
                <section className='flex items-center '>
                    <div className='flex items-center'>
                        <BsFillStarFill size={16} />
                    </div>
                    <h1 className='ml-1 font-medium'>{data?.ration}</h1>
                </section>
            </section>
            <p className='text-textOne '>{data?.distance} kilometers away</p>
            <p className='text-textOne '>{data?.nights} nights <span>.</span> {data?.fromTo} </p>
            <div className='text-textOne   flex items-center group-hover:underline'>
                <h1 className='text-[#000] font-bold'>₹{data?.taxes}</h1>
                <h1 className='ml-1'>total before taxes</h1>
            </div>
        </section>
    )
}

export default HotelCard
