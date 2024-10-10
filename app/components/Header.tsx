"use client"

import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from './ui'
import Logo from "../assets/images/Resulta.png"
import { useFetchDrawResults } from '../lib/hooks/useFetchData'
import Image from 'next/image'


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const { data: drawNames } = useFetchDrawResults();

    return (
        <header className="w-full">
            <div className="bg-primary overflow-hidden">
                <div className="animate-marquee whitespace-nowrap py-2">
                    Resultados de loterias: {drawNames?.map((drawName) => (
                        <span key={drawName.id} className="text-foreground px-4">
                            {drawName.description}
                        </span>
                    ))}
                </div>
            </div>
            <nav className="bg-background shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/" className="text-2xl font-bold text-primary">
                                    <Image src={Logo} alt="Logo" width={100} height={100} className='rounded-lg' />
                                </Link>
                            </div>
                        </div>
                        {/* <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary">
                                Home
                            </Link>
                            <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary">
                                About
                            </Link>
                            <Link href="/services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary">
                                Services
                            </Link>
                            <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-primary">
                                Contact
                            </Link>
                        </div> */}
                        <div className="flex items-center sm:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Main menu"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="sm:hidden">
                        {/* <div className="pt-2 pb-3 space-y-1">
                            <Link href="/" className="block px-3 py-2 text-base font-medium text-primary">
                                Home
                            </Link>
                            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">
                                About
                            </Link>
                            <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">
                                Services
                            </Link>
                            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-primary">
                                Contact
                            </Link>
                        </div> */}
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header