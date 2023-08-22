"use client"
import React, { useState } from 'react'

const SearchTabs = ({ handleTabs, activeIndex }) => {

    const tabs = [
        {
            tabName: 'Stays',
            keyName: 'stays',
            index: 1
        },
        {
            tabName: 'Experiences',
            keyName: 'experiences',
            index: 2
        },
        {
            tabName: 'Online Experiences',
            keyName: 'onlineExperiences',
            index: 3
        },
    ]
    return (
        <>
            <section className='flex items-center justify-center  px-[5px]'>
                {
                    tabs?.map((d, i) => (
                        <p onClick={() => handleTabs(d?.index)} key={i} className={`mx-3 cursor-pointer text-black font-small font-bold ${activeIndex === d?.index ? "border-b-2 border-b-black hover:border-b-black hover:text-black" : 'border-b-white border-b-2  hover:text-gray-400 hover:border-b-2 hover:border-gray-300'}`}>
                            {d?.tabName}
                        </p>
                    ))
                }
            </section>
        </>
    )
}

export default SearchTabs;


