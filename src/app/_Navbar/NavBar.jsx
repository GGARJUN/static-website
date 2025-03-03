'use client'

import { useEffect, useRef, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { ChevronRightIcon, ChevronUpIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const about = [
    { name: 'Who we are', description: 'Get a better understanding of your traffic', href: "/about/who_we_are", icon: ChartPieIcon },
    { name: 'Careers', description: 'Speak directly to your customers', href: "/about/career", icon: CursorArrowRaysIcon },
    { name: 'Patners', description: 'Your customers’ data will be safe and secure', href: "/about/partners", icon: FingerPrintIcon },
]

const engineering = [
    { name: 'Hardware', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Firmware', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Software', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Mechanical', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
]

const design = [
    { name: 'PCB Design Service', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'PCB Layout', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'SI/PI Analysis', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Reverse Engineering ', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Design Modification Service', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Design for Manufacturability', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
]
const manufactring = [
    { name: 'PCBA', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Test Fixture', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Box Build', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
]

const iot = [
    { name: 'Industrial Iot', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Smart Homes Iot', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Smart Lighting Iot', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Level Monitoring', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
]
const resources = [
    { name: 'Blogs', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'News', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
]




const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            //> window.innerHeight * 0.1
            if (currentScrollY) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (currentScrollY > lastScrollY + 30) {
                // Hide when scrolling down
                setHidden(true);
            } else if (currentScrollY < lastScrollY - 30) {
                // Show when scrolling up
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isNestedOpen, setIsNestedOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 2000); // Hide popover after 2 seconds
    };


    return (
        <header
            className={`top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? `fixed bg-white shadow-lg text-black ${hidden ? "-translate-y-full" : "translate-y-0"}`
                : "absolute bg-white text-black"
                }`}
        >
            <nav aria-label="Global" className="mx-auto flex  items-center justify-between px-20 2xl:py-8 py-4">

                <Link href="/" className=" ">
                    <h2
                        className={`${scrolled ? "text-4xl font-bold duration-300" : "text-4xl font-bold"
                            }`}
                    >
                        SunKey
                    </h2>
                </Link>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-7">
                    <Popover className="relative">
                        <PopoverButton className="inline-flex items-center gap-x-1 2xl:text-[1rem] text-sm/6 font-semibold  group hover:text-blue-600 ">
                            About Us
                            <ChevronUpIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-400 transition-transform duration-300 group-hover:text-blue-600 group-data-[open]:rotate-180"
                            />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {about.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-xl text-sm/6">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Popover className="relative"
                    >
                        {/* Main Popover Button */}
                        <PopoverButton className="flex items-center gap-x-1 2xl:text-[1rem] text-sm/6 font-semibold  group hover:text-blue-600">
                            Engineering Design Service
                            <ChevronUpIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-400 transition-transform duration-300 group-hover:text-blue-600 group-data-[open]:rotate-180"
                            />
                        </PopoverButton>

                        {/* Main Popover Panel */}

                        <PopoverPanel className="absolute top-full left-0 z-10 mt-3 w-screen max-w-md overflow-x-visible rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {engineering.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-xl text-sm/6">
                                                {item.name}
                                            </Link>
                                            <p className="text-gray-600 text-xs">{item.description}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Nested Popover Inside Main Popover */}
                                <Popover className="relative">
                                    <PopoverButton
                                        onMouseEnter={() => setIsNestedOpen(true)}
                                        onMouseLeave={() => setIsNestedOpen(false)}
                                        className="flex w-full items-center justify-evenly 2xl:text-xl text-sm font-semibold text-gray-900 group hover:text-blue-600 mt-3"
                                    >
                                        Electronic Design
                                        <ChevronRightIcon className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-blue-600 group-hover:translate-x-1" />
                                    </PopoverButton>

                                    {/* Nested Popover Panel */}
                                    {isNestedOpen && (
                                        <PopoverPanel
                                            static
                                            onMouseEnter={() => setIsNestedOpen(true)}
                                            onMouseLeave={() => setIsNestedOpen(false)}
                                            className="absolute left-[100%] -top-64 z-20 mt-0  w-screen max-w-md overflow-x-visible rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                        >
                                            <div className="p-4">
                                                {design.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                                    >
                                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                        </div>
                                                        <div className="flex-auto">
                                                            <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-xl text-sm/6">
                                                                {item.name}
                                                            </Link>
                                                            <p className="text-gray-600 text-xs">{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </PopoverPanel>
                                    )}
                                </Popover>
                            </div>
                        </PopoverPanel>

                    </Popover>

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 2xl:text-[1rem] text-sm/6 font-semibold  group hover:text-blue-600">
                            Manufacturing Service
                            <ChevronUpIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-400 transition-transform duration-300 group-hover:text-blue-600 group-data-[open]:rotate-180"
                            />
                        </PopoverButton>


                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {manufactring.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-xl text-sm/6">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 2xl:text-[1rem] text-sm/6 font-semibold  group hover:text-blue-600">
                            Internet of things
                            <ChevronUpIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-400 transition-transform duration-300 group-hover:text-blue-600 group-data-[open]:rotate-180"
                            />
                        </PopoverButton>


                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {iot.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-xl text-sm/6">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <PopoverButton className="flex items-center gap-x-1 2xl:text-[1rem] text-sm/6 font-semibold  group hover:text-blue-600">
                                    Resources
                                    <ChevronUpIcon
                                        aria-hidden="true"
                                        className="size-5 flex-none text-gray-400 transition-transform duration-300 group-hover:text-blue-600 group-data-[open]:rotate-180"
                                    />
                                </PopoverButton>
                                <AnimatePresence>
                                    {open && (

                                        <PopoverPanel
                                            static
                                            as={motion.div}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                        >
                                            <div className="p-4">
                                                {resources.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                                    >
                                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                        </div>
                                                        <div className="flex-auto">
                                                            <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-xl text-sm/6">
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </Link>
                                                            <p className="mt-1 text-gray-600 ">{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </PopoverPanel>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    </Popover>

                    <a href="#" className="2xl:text-[1rem] text-sm/6  font-semibold hover:text-blue-600">
                        Case Studies
                    </a>


                    <a href="#" className="2xl:text-[1rem] text-sm/6 font-semibold hover:text-blue-600">
                        Contect Us
                    </a>

                </PopoverGroup>
            </nav>


            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className=" ">
                            <h2
                                className={`${scrolled ? "text-4xl font-bold duration-300" : "text-4xl font-bold"
                                    }`}
                            >
                                SunKey
                            </h2>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="ml-10  block items-center justify-center rounded-md p-2.5 text-gray-700 bg-black"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        About Us
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...about].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Engineering Design Services
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...engineering].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Electronic Design
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...design].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Manufacturing Services
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...manufactring].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Internet of Things
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...iot].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Case Studies
                                </a>

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Resources
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...resources].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Cantact Us
                                </a>



                            </div>

                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default NavBar
