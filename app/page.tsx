'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="flex items-center justify-between px-8 py-8 bg-white">
                <img src="/icons/logo.svg" alt="Logo" width={160} height={160} />

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
            <div className="flex flex-col items-center min-h-screen bg-white pt-10">
                {/* Bloc bleu clair */}
                <div className="relative z-10 w-full max-w-2xl px-8 pt-10 pb-14 bg-[#d1eefe] rounded-[48px]">

                    {/* -- 1 -- */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-5 h-5 bg-[#FF6A3F] rounded-full border-2 border-black"></span>
                        <span className="font-black text-lg">1. Personnalisation stylée</span>
                    </div>
                    <div className="ml-7 mb-6 text-base">
                        <span className="text-[#188C65] font-bold">1 jeune sur 2</span> se dit prêt à investir dans un vêtement personnalisé.
                    </div>
                    {/* -- 2 -- */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-5 h-5 rounded-full border-2 border-black bg-white"></span>
                        <span className="font-black text-lg">2. Réparer c’est agir</span>
                    </div>
                    <div className="ml-7 mb-6 text-base">
                        <span className="text-[#FF6A3F] font-bold">833.000 tonnes</span> de vêtements sont mises sur le marché chaque année. Un trou ? Une tâche ? Donne-leur une seconde vie.
                    </div>
                    {/* -- 3 -- */}
                    <div className="flex items-center gap-2 mb-3">
      <span className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
        <span className="w-2.5 h-2.5 bg-[#26B37B] rounded-full"></span>
      </span>
                        <span className="font-black text-lg">3. Transmission du savoir</span>
                    </div>
                    <div className="ml-7 text-base">
                        <span className="text-[#26B37B] font-bold">+ de 700 réparateurs labellisés</span> en France.<br />
                        Apprends avec des pros, développe une compétence utile.
                    </div>
                </div>
                <div className="-mt-8 z-20 w-full max-w-xl bg-white rounded-[48px] shadow px-6 py-8 flex flex-col items-center font-semibold text-lg text-center">
                    Apprends à <b>sublimer</b> tes<br />vêtements abîmés
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
                    <p className='text-xl mb-6 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <p className='text-2xl mb-2 font-medium'>Do it yourself ! -&gt;</p>
                    <p className='text-2xl mb-2 font-medium'>Avec un.e pro -&gt;</p>
                    <p className='text-xl mb-4 font-light'>© 2025 NOM</p>
                    <p className='text-lg mb-4 font-medium'>Mentions Légales Conditions générales d’utilisation Politique de protection des données personnelles Politique de Cookies Déclaration d’accessibilité</p>
                    <img
                        src="/icons/logo.svg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="logo-blanc"
                    />
                </div>
            </div>
        </div>
    );
}