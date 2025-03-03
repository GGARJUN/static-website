"use client";
import { React, useState } from "react";
import Link from "next/link";
import {
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronRightIcon, ChevronUpIcon } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export function NavLinks() {
    const about = [
        { name: 'Who we are', description: 'Get a better understanding of your', href: "/about/who_we_are", icon: ChartPieIcon },
        { name: 'Careers', description: 'Speak directly to your customers', href: "/about/careers", icon: CursorArrowRaysIcon },
        { name: 'Patners', description: 'Your customers’ data will be safe ', href: "/about/partners", icon: FingerPrintIcon },
    ]
    const engineering = [
        { name: 'Hardware', description: 'Get a better understanding of your design', href: '/engineering_design_services/hardware', icon: ChartPieIcon },
        { name: 'Firmware', description: 'Speak directly to your customers', href: '/engineering_design_services/firmware', icon: CursorArrowRaysIcon },
        { name: 'Software', description: 'Your customers’ data will be safe and secure', href: '/engineering_design_services/software', icon: FingerPrintIcon },
        { name: 'Mechanical', description: 'Connect with third-party tools', href: '/engineering_design_services/mechanical', icon: SquaresPlusIcon },
        {name: 'Electronic Design', description: 'Connect with third-party tools', icon: CursorArrowRaysIcon,
            children: [
                { name: 'PCB Design Service', description: 'Get a better understanding of your design', href: '/electronic_design/pcb_design_service', icon: ChartPieIcon },
                { name: 'PCB Layout', description: 'Speak directly to your customers', href: '/electronic_design/pcb_layout', icon: CursorArrowRaysIcon },
                { name: 'SI/PI Analysis', description: 'Speak directly to your customers', href: '/electronic_design/analysis', icon: FingerPrintIcon },
                { name: 'Reverse Engineering', description: 'Connect with third-party tools', href: '/electronic_design/reverse_engineering', icon: SquaresPlusIcon },
                { name: 'Design Modification Service', description: 'Modify and improve designs', href: '/electronic_design/design_modification_service', icon: CursorArrowRaysIcon },
                { name: 'Design for Manufacturability', description: 'Connect with third-party tools', href: '/electronic_design/design_for_manufacturability', icon: ChartPieIcon },
            ]
        }
    ];
    const manufactring = [
        { name: 'PCBA', description: 'Get a better understanding of your ', href: '/manufacturing/pcba', icon: ChartPieIcon },
        { name: 'Test Fixture', description: 'Speak directly to your customers', href: '/manufacturing/text_fixture', icon: CursorArrowRaysIcon },
        { name: 'Box Build', description: 'Your customers’ data will be safe and secure', href: '/manufacturing/box_build', icon: FingerPrintIcon },
    ]
    const iot = [
        { name: 'Industrial Iot', description: 'Get a better understanding of your traffic', href: '/iot/industrial_iot', icon: ChartPieIcon },
        { name: 'Smart Homes Iot', description: 'Speak directly to your customers', href: '/iot/smart_homes_iot', icon: CursorArrowRaysIcon },
        { name: 'Smart Lighting Iot', description: 'Your customers’ data will be safe and secure', href: '/iot/smart_lighting_iot', icon: FingerPrintIcon },
        { name: 'Level Monitoring', description: 'Connect with third-party tools', href: '/iot/level_monitoring', icon: SquaresPlusIcon },
    ]
    const resources = [
        { name: 'Blogs', description: 'Get a better understanding of your traffic', href: '/resources/blogs', icon: ChartPieIcon },
        { name: 'News', description: 'Speak directly to your customers', href: '/resources/news', icon: CursorArrowRaysIcon },
    ]
    const [openMenu, setOpenMenu] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [delayTimer, setDelayTimer] = useState(null);
    const handleMouseEnter = () => {
        const timer = setTimeout(() => setOpenMenu(true), 300);
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
                            <div className="z-10 w-screen max-w-sm overflow-hidden rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                                <div className="p-4">{about.map((item) => (
                                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100">
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">{item.name}<span className="absolute inset-0" /></Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>))}
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <nav className="relative">
                <ul className="flex gap-4">
                    <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <button className="inline-flex gap-1 h-9 w-max items-center justify-center rounded-md 2xl:px-5 px-3 2xl:text-[1rem] text-sm font-medium focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50">
                            Engineering Design Services
                            <ChevronUpIcon className={`w-3 h-3 transition-transform duration-500 ${openMenu ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {openMenu && (
                            <div className="absolute left-0 top-8 mt-2 w-96 bg-white shadow-lg rounded-xl p-4 ring-1 ring-gray-900/5">
                                {engineering.map((item, index) => (
                                    <div key={item.name} className="relative" onMouseEnter={() => item.children && setOpenSubmenu(index)} onMouseLeave={() => setOpenSubmenu(null)}>
                                        <div className="group flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-100">
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                                {item.icon && <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />}
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href || "#"} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">{item.name}</Link>
                                                <p className="text-gray-600 text-xs">{item.description}</p>
                                            </div>
                                            {item.children && <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-2 duration-200" />}
                                        </div>
                                        {item.children && openSubmenu === index && (
                                            <div className="absolute left-[99%] -top-20 ml-2 w-96 bg-white shadow-lg rounded-xl p-4 ring-1 ring-gray-900/5">
                                                {item.children.map((child) => (
                                                    <div key={child.name} className="flex group items-center gap-x-6 p-4 rounded-lg text-sm hover:bg-gray-100">
                                                        <div className="flex size-11 items-center justify-center flex-none bg-gray-100 rounded-lg group-hover:bg-white">
                                                            {child.icon && <child.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />}
                                                        </div>
                                                        <div className="flex-auto">
                                                            <Link href={child.href || "#"} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">{child.name}</Link>
                                                            <p className="text-gray-600 text-xs">{child.description}</p>
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
                            <div className="z-10 w-screen max-w-sm overflow-hidden rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                                <div className="p-4">
                                    {manufactring.map((item) => (
                                        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100">
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
                            <div className="z-10 w-screen max-w-sm overflow-hidden rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                                <div className="p-4">
                                    {iot.map((item) => (
                                        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100">
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
                            <div className="z-10 w-screen max-w-sm overflow-hidden rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                                <div className="p-4">
                                    {resources.map((item) => (
                                        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100">
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


