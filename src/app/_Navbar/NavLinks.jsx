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

export function NavLinks() {
    const about = [
        { title: "Who we are", href: "/about/who_we_are", },
        { title: "Career", href: "/about/career", },
        { title: "Contact", href: "/docs/primitives/progress", },
        { title: "Partners", href: "/docs/primitives/progress", },
    ]
    return (
        <div className="flex justify-center items-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className=" p-3  md:w-[400px] lg:w-[140px] flex flex-col justify-center gap-1 w-full  ">
                                {about.map((item,index) => (
                                    <Link key={index} href={item.href} className="hover:bg-gray-100 rounded-sm p-2 font-semibold text-sm">{item.title}</Link>
                                ))}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Engineering Design Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className=" p-3 md:w-[230px]  flex flex-col justify-center ">
                                <ListItem href="/docs" title="Hardware">
                                </ListItem>
                                <ListItem href="/docs/installation" title="Firmware">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Software">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Mechanical">
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Electonic Design</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className=" p-3 md:w-[250px]  flex flex-col justify-center ">
                                <ListItem href="/docs" title="PCB Design Service">
                                </ListItem>
                                <ListItem href="/docs/installation" title="PCB Layout">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="SI/PI Analysis">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Reverse Engineering">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Design Modification Service">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Design for Manufacturability">
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Manufacturing Service</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className=" p-3 md:w-[190px]  flex flex-col justify-center ">
                                <ListItem href="/docs" title="PCBA">
                                </ListItem>
                                <ListItem href="/docs/installation" title="Test Fixtures">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Box Build">
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Internet of Things</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className=" p-3 md:w-[180px]  flex flex-col justify-center ">
                                <ListItem href="/docs" title="Industrial IoT">
                                </ListItem>
                                <ListItem href="/docs/installation" title="Smart Homes IoT">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Smart Lighting IoT">
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Level Monitoring">
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
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
