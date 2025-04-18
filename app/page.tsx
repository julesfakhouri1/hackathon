'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="flex items-center justify-between px-8 py-8 bg-white">
                <h1 className="text-4xl font-light">LOGO</h1>

                <div className="hidden md:flex gap-6 text-lg">
                    <a
                        href="#"
                        className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-label="Réparer section"
                    >
                        Réparer
                    </a>
                    <a
                        href="#"
                        className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-label="Personnaliser section"
                    >
                        Personnaliser
                    </a>
                    <a
                        href="#"
                        className="hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-label="Transmettre section"
                    >
                        Transmettre
                    </a>
                </div>

                <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer p-2 focus:outline-none rounded-full"
                            aria-label="Toggle menu"
                        >
                            <Image
                                src="/icons/bar.png"
                                alt="Open menu"
                                width={24}
                                height={24}
                            />
                        </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white">
                    <a
                        href="#"
                        className="text-lg hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-label="Réparer section"
                    >
                        Réparer
                    </a>
                    <a
                        href="#"
                        className="text-lg hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-label="Personnaliser section"
                    >
                        Personnaliser
                    </a>
                    <a
                        href="#"
                        className="text-lg hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-label="Transmettre section"
                    >
                        Transmettre
                    </a>
                </div>
            )}
            <div className='bg-[#D1EEFE] min-h-[300px] rounded-tl-[50px] rounded-tr-[50px]'>
            </div>

            <div className="px-8 mt-[-120px] relative z-10">
                <div className='bg-white rounded-[60px] h-[150px]'>
                </div>
            </div>

            <div className='bg-[#2CB577] relative z-8 mt-[-75px] rounded-tl-[50px] rounded-tr-[50px] rounded-t-[60px]'>
                <br/>
                <br/>
                <div className='py-20'>
                    <p className='text-center text-white text-3xl font-light'>Choisissez votre solution</p>
                </div>

                <div className="px-4 py-8">
                    <div
                        className="relative bg-cover bg-center rounded-[70px] h-[150px] flex px-8 items-center text-white text-2xl font-semibold shadow-lg overflow-hidden"
                        style={{backgroundImage: `url("/card-1.png")`}}
                    >
                        <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-[70px]"/>
                        <div className="flex w-full relative z-10">
                            <div className="w-3/4">
                                <h3 className="text-lg font-bold">Do it yourself !</h3>
                                <h4 className="text-base font-light">Personnalise ton vêtement toi-même</h4>
                            </div>
                            <div className="flex items-center justify-end w-1/4">
                                <button
                                    onClick={() => console.log("Do it yourself clicked")}
                                    className="cursor-pointer p-2 focus:outline-none rounded-full"
                                    aria-label="Go to Do it yourself section"
                                >
                                    <Image
                                        src="/icons/arrow.svg"
                                        alt="Arrow icon for Do it yourself"
                                        width={40}
                                        height={40}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-8">
                    <div
                        className='relative bg-cover bg-center rounded-[70px] h-[150px] flex px-8 items-center text-white text-2xl font-semibold shadow-lg overflow-hidden'
                        style={{backgroundImage: `url("/card-2.png")`}}
                    >
                        <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-[70px]"/>
                        <div className='flex w-full relative z-10'>
                            <div className='w-3/4'>
                                <h3 className='text-lg font-bold'>Avec un pro</h3>
                                <h4 className='text-lg font-light'>Personnalise</h4>
                            </div>
                            <div className='flex items-center justify-end w-1/4'>
                                <button
                                    onClick={() => console.log("Avec un pro clicked")}
                                    className="cursor-pointer p-2 focus:outline-none rounded-full"
                                    aria-label="Go to Avec un pro section"
                                >
                                    <Image
                                        src="/icons/arrow.svg"
                                        alt="Arrow icon for Avec un pro"
                                        width={40}
                                        height={40}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>

            <div className='bg-[#1E1E1E] relative z-10 mt-[-50px] rounded-tl-[50px] rounded-tr-[50px]'>
                <br/>
                <div className='p-8 text-white'>
                    <h1 className='text-2xl mb-4 font-medium'>LOGO</h1>
                    <p className='text-xl mb-6 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <p className='text-2xl mb-2 font-medium'>Do it yourself ! -&gt;</p>
                    <p className='text-2xl mb-2 font-medium'>Avec un.e pro -&gt;</p>
                    <p className='text-xl mb-4 font-light'>© 2025 NOM</p>
                    <p className='text-lg mb-4 font-medium'>Mentions Légales Conditions générales d’utilisation Politique de protection des données personnelles Politique de Cookies Déclaration d’accessibilité</p>
                </div>
            </div>
        </div>
    );
}