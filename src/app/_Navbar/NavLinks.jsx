"use client";

import * as React from "react";
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

    return (
        <div className="flex justify-center items-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div
                                className="  z-10 w-screen max-w-md overflow-hidden rounded-3xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
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
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Nested Popover Inside Main Popover */}
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Engineering Design Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="relative z-10 w-screen h-[355px]  max-w-md  overflow-y-auto overflow-x-visible rounded-3xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
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
                                    <h2
                                        className="flex w-full items-center justify-start 2xl:text-[1rem] text-sm font-semibold text-gray-900 group hover:text-blue-600 "
                                    >
                                        Electronic Design
                                        <ChevronRightIcon className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-blue-600 group-hover:translate-x-1" />
                                    </h2>
                                    <div
                                        className=" w-[400px] pb-5 mt-2 max-w-md overflow-x-visible rounded-3xl bg-white ring-1 shadow-lg"
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
                                    </div>

                                    {/* Nested Popover Panel */}
                                    {/* <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <NavigationMenuTrigger>Electonic Design</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <div
                                                        className=" w-[400px] pb-5 max-w-md overflow-x-visible rounded-3xl bg-white ring-1 shadow-lg  "
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
                                                    </div>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu> */}
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>



            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Manufacturing Service</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div
                                className=" z-10  w-screen max-w-md overflow-hidden rounded-3xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
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
                                className=" z-10 w-screen max-w-md overflow-hidden rounded-3xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
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
                                className=" z-10 w-screen max-w-md overflow-hidden rounded-3xl  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
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
