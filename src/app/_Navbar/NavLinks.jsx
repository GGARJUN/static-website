"use client";

import { React, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronRightIcon, ChevronUpIcon } from "lucide-react";

export function NavLinks() {
    const about = [
        { name: 'Who we are', description: 'Get a better understanding of your', href: "/about/who_we_are", icon: ChartPieIcon },
        { name: 'Careers', description: 'Speak directly to your customers', href: "/about/careers", icon: CursorArrowRaysIcon },
        { name: 'Patners', description: 'Your customers’ data will be safe ', href: "/about/partners", icon: FingerPrintIcon },

    ]
    const engineering = [
        {
            name: 'Hardware',
            description: 'Get a better understanding of your design',
            href: '/engineering_design_services/hardware',
            icon: ChartPieIcon
        },
        {
            name: 'Firmware',
            description: 'Speak directly to your customers',
            href: '/engineering_design_services/firmware',
            icon: CursorArrowRaysIcon
        },
        {
            name: 'Software',
            description: 'Your customers’ data will be safe and secure',
            href: '/engineering_design_services/software',
            icon: FingerPrintIcon
        },
        {
            name: 'Mechanical',
            description: 'Connect with third-party tools',
            href: '/engineering_design_services/mechanical',
            icon: SquaresPlusIcon
        },
        {
            name: 'Electronic Design',
            description: 'Connect with third-party tools',
            icon: CursorArrowRaysIcon,
            children: [
                {
                    name: 'PCB Design Service',
                    description: 'Get a better understanding of your design',
                    href: '/engineering_design_services/electronic_design/pcb_design_service',
                    icon: ChartPieIcon
                },
                {
                    name: 'PCB Layout',
                    description: 'Speak directly to your customers',
                    href: '/engineering_design_services/electronic_design/pcb_layout',
                    icon: CursorArrowRaysIcon
                },
                {
                    name: 'SI/PI Analysis',
                    description: 'Speak directly to your customers',
                    href: '/engineering_design_services/electronic_design/analysis',
                    icon: FingerPrintIcon
                },
                {
                    name: 'Reverse Engineering',
                    description: 'Connect with third-party tools',
                    href: '/engineering_design_services/electronic_design/reverse_engineering',
                    icon: SquaresPlusIcon
                },
                {
                    name: 'Design Modification Service',
                    description: 'Modify and improve designs',
                    href: '/engineering_design_services/electronic_design/design_modification_service',
                    icon: CursorArrowRaysIcon
                },
                {
                    name: 'Design for Manufacturability',
                    description: 'Connect with third-party tools',
                    href: '/engineering_design_services/electronic_design/design_for_manufacturability',
                    icon: ChartPieIcon
                },
            ]
        }
    ];


    const manufactring = [
        { name: 'PCBA', description: 'Get a better understanding of your ', href: '#', icon: ChartPieIcon },
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


    const [openMenu, setOpenMenu] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [delayTimer, setDelayTimer] = useState(null);

    const handleMouseEnter = () => {
        const timer = setTimeout(() => setOpenMenu(true), 300); // 1 sec delay
        setDelayTimer(timer);
    };

    const handleMouseLeave = () => {
        clearTimeout(delayTimer);
        setOpenMenu(false);
        setOpenSubmenu(null);
    };


    return (
        <div className="flex justify-center items-center">

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div
                                className="  z-10 w-screen max-w-sm overflow-hidden rounded-xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="p-4">
                                    {about.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100"
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Nested Popover Inside Main Popover */}
            {/* <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Engineering Design Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="relative z-10 w-screen h-[400px] max-w-4xl overflow-y-auto overflow-x-visible rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                                <div className="p-4">
                                    {engineering.map((item) => (
                                        <div key={item.name}>
                                            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-100">
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                                    {item.icon && <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />}
                                                </div>
                                                <div className="flex-auto">
                                                    <Link href={item.href || "#"} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                                        {item.name}
                                                    </Link>
                                                    <p className="text-gray-600 text-xs">{item.description}</p>
                                                </div>
                                            </div>


                                            {item.children && item.children.length > 0 && (
                                                <div className="absolute z-[1000] top-0 left-[50%] w-[400px] pb-5 mt-2 max-w-sm overflow-x-visible rounded-xl bg-white ring-1 shadow-lg">
                                                    <div className="p-4">
                                                        {item.children.map((child) => (
                                                            <div key={child.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-100">
                                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                                                    {child.icon && <child.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />}
                                                                </div>
                                                                <div className="flex-auto">
                                                                    <Link href={child.href || "#"} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                                                        {child.name}
                                                                    </Link>
                                                                    <p className="text-gray-600 text-xs">{child.description}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu> */}

            <nav className="relative">
                <ul className="flex gap-4">
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Hover Button */}
                        <button className="  inline-flex gap-1 h-9 w-max items-center justify-center rounded-md  2xl:px-5 px-3  2xl:text-[1rem] text-sm font-medium   focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50">
                            Engineering Design Services
                            <ChevronUpIcon
                                className={`w-3 h-3 transition-transform duration-500 ${openMenu ? "rotate-180" : "rotate-0"}`}
                            />
                        </button>

                        {/* Dropdown - Appears after delay */}
                        {openMenu && (
                            <div className="absolute left-0 top-8 mt-2 w-96 bg-white shadow-lg rounded-xl p-4 ring-1 ring-gray-900/5">
                                {engineering.map((item, index) => (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => item.children && setOpenSubmenu(index)}
                                        onMouseLeave={() => setOpenSubmenu(null)}
                                    >
                                        <div className=" group  flex items-center gap-x-6 rounded-lg p-4 text-sm  hover:bg-gray-100">
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                                {item.icon && <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />}
                                            </div>

                                            <div className="flex-auto">
                                                <Link href={item.href || "#"} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                                    {item.name}
                                                </Link>
                                                <p className="text-gray-600 text-xs">{item.description}</p>
                                            </div>
                                            {item.children && <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-2 duration-200" />}
                                        </div>


                                        {/* Submenu - Appears when hovering over an item with children */}
                                        {item.children && openSubmenu === index && (
                                            <div className="absolute  left-[99%] -top-20 ml-2 w-96 bg-white shadow-lg rounded-xl p-4 ring-1 ring-gray-900/5">
                                                {item.children.map((child) => (
                                                    <div key={child.name} className="flex group items-center gap-x-6 p-4 rounded-lg text-sm  hover:bg-gray-100">

                                                        {/* Icon Section - Changes to text-blue-500 on hover */}
                                                        <div className="flex size-11 items-center justify-center flex-none bg-gray-100 rounded-lg group-hover:bg-white">
                                                            {child.icon && <child.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />}
                                                        </div>

                                                        {/* Text Section */}
                                                        <div className="flex-auto">
                                                            <Link href={child.href || "#"} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                                                {child.name}
                                                            </Link>
                                                            <p className="text-gray-600 text-xs">{child.description}</p> {/* Description added */}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>
            </nav>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Manufacturing Service</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div
                                className=" z-10  w-screen max-w-sm overflow-hidden rounded-xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="p-4">
                                    {manufactring.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100"
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>


            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Internet of Things</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div
                                className=" z-10 w-screen max-w-sm overflow-hidden rounded-xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="p-4">
                                    {iot.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100"
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div
                                className=" z-10 w-screen max-w-sm overflow-hidden rounded-xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="p-4">
                                    {resources.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100"
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600 ">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Case Studies
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

function ListItem({ className, title, children, ...props }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}
