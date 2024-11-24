"use client"
import React, { useState } from 'react'

const Shop = () => {
    const [toggle, setToggle] = useState(false);
    const [togglePage, setTogglePage] = useState(false);

    return (
        <div className='w-[90%] m-auto'>
            <div className='flex justify-between  bg-red-400 '>
                <div>
                    <p>LOGO HERE</p>
                </div>
                <div className='flex justify-between border-2 border-black gap-5'>
                    <div>
                        <p>HOME</p>
                    </div>
                    <button
                        onClick={() => {
                            setToggle(!toggle)
                        }}
                    >Dropdown</button>
                    <div>
                        <p>ABOUT</p>
                    </div>
                    <div className='relative'>
                        <button
                        onClick={() => {
                            setTogglePage(!togglePage)
                        }}
                        >PAGES</button>
                        {
                            togglePage && <ol className='absolute'>
                                <li>loremm</li>
                                <li>loremm</li>
                                <li>loremm</li>
                            </ol>
                        }
                    </div>
                    <div>
                        <p>CONTACT</p>
                    </div>

                </div>
                <div className='flex justify-between'>
                    <p>search</p>
                    <p>cart icon</p>
                </div>
            </div>
            <div>
                {
                    toggle && <div className='bg-slate-300 w-[90%] flex'>
                        <div>
                            <h1>Equipments</h1>
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                        <div>
                            <h1>Workouts wear</h1>
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                        {/* <Image src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" /> */}
                    </div>
                }
            </div>
        </div>
 )
}

export default Shop
