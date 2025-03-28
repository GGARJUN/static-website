"use client";
import { React, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  BackwardIcon,
  Bars3Icon,
  ChartBarIcon,
  ChartPieIcon,
  CogIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  FireIcon,
  LightBulbIcon,
  NewspaperIcon,
  PresentationChartBarIcon,
  ServerIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon, ChevronUpIcon } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";
import Head from "next/head";
const NavLinks = () => {

  const router = useRouter();
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCanonicalUrl(`https://www.sunkeydesignsystems.com/${router.asPath}`);
    }
  }, [router.asPath]);


  const about = [
    { name: 'Who we are', description: 'Get a better understanding of your', href: "/about/who-we-are", icon: UsersIcon },
    // { name: 'Careers', description: 'Speak directly to your customers', href: "/about/careers", icon: CursorArrowRaysIcon },
    // { name: 'Partners', description: 'Your customers’ data will be safe ', href: "/about/partners", icon: FingerPrintIcon },
  ]
  const engineering = [
    { name: 'Hardware', description: 'Get a better understanding of your', href: '/engineering-design-services/hardware', icon: WrenchScrewdriverIcon },
    { name: 'Firmware', description: 'Speak directly to your customers', href: '/engineering-design-services/firmware', icon: FireIcon },
    { name: 'Software', description: 'Your customers’ data will be safe ', href: '/engineering-design-services/software', icon: ComputerDesktopIcon },
    { name: 'Mechanical', description: 'Connect with third-party tools', href: '/engineering-design-services/mechanical', icon: CogIcon },
    {
      name: 'Electronic Design', description: 'Connect with third-party tools', icon: LightBulbIcon,
      children: [
        { name: 'PCB Design Service', description: 'Get a better understanding ', href: '/electronic-design/pcb-design-service', icon: ChartPieIcon },
        { name: 'PCB Layout', description: 'Speak directly to your customers', href: '/electronic-design/pcb-layout', icon: CpuChipIcon },
        { name: 'SI/PI Analysis', description: 'Speak directly to your customers', href: '/electronic-design/analysis', icon: ChartBarIcon },
        { name: 'Reverse Engineering', description: 'Connect with third-party tools', href: '/electronic-design/reverse-engineering', icon: BackwardIcon },
        { name: 'Design Modification Service', description: 'Modify and improve designs', href: '/electronic-design/design-modification-service', icon: PresentationChartBarIcon },
        { name: 'Design for Manufacturability', description: 'Connect with third-party tools', href: '/electronic-design/design-for-manufacturability', icon: ChartPieIcon },
      ]
    }
  ];
  const engineeringmob = [
    { name: 'Hardware', description: 'Get a better understanding of your design', href: '/engineering-design-services/hardware', icon: ChartPieIcon },
    { name: 'Firmware', description: 'Speak directly to your customers', href: '/engineering-design-services/firmware', icon: CursorArrowRaysIcon },
    { name: 'Software', description: 'Your customers’ data will be safe and secure', href: '/engineering-design-services/software', icon: FingerPrintIcon },
    { name: 'Mechanical', description: 'Connect with third-party tools', href: '/engineering-design-services/mechanical', icon: SquaresPlusIcon },
  ];
  const design = [
    { name: 'PCB Design Service', description: 'Get a better understanding of your design', href: '/electronic-design/pcb-design-service', icon: ChartPieIcon },
    { name: 'PCB Layout', description: 'Speak directly to your customers', href: '/electronic-design/pcb-layout', icon: CursorArrowRaysIcon },
    { name: 'SI/PI Analysis', description: 'Speak directly to your customers', href: '/electronic-design/analysis', icon: FingerPrintIcon },
    { name: 'Reverse Engineering', description: 'Connect with third-party tools', href: '/electronic-design/reverse-engineering', icon: SquaresPlusIcon },
    { name: 'Design Modification Service', description: 'Modify and improve designs', href: '/electronic-design/design-modification-service', icon: CursorArrowRaysIcon },
    { name: 'Design for Manufacturability', description: 'Connect with third-party tools', href: '/electronic-design/design-for-manufacturability', icon: ChartPieIcon },
  ]
  const manufactring = [
    { name: 'PCBA', description: 'Get a better understanding of your ', href: '/manufacturing/pcba', icon: CpuChipIcon },
    { name: 'Test Fixture', description: 'Speak directly to your customers', href: '/manufacturing/test-fixture', icon: ServerIcon },
    { name: 'Box Build', description: 'Your customers’ data will be safe ', href: '/manufacturing/box-build', icon: Square3Stack3DIcon },
  ]
  const resources = [
    { name: 'Blogs', description: 'Get a better  ', href: '/resources/blogs', icon: NewspaperIcon },
    // { name: 'News', description: 'Speak directly to your customers', href: '/resources/news', icon: CursorArrowRaysIcon },
  ]


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [delayTimer, setDelayTimer] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // const handleMouseEnter = () => {
  //   const timer = setTimeout(() => setOpenMenu(true), 300);
  //   setDelayTimer(timer);
  // };

  // const handleMouseLeave = () => {
  //   clearTimeout(delayTimer);
  //   setOpenMenu(false);
  //   setOpenSubmenu(null);
  // };

  const handleMouseEnter = (index) => {
    if (engineering[index].children) {
      setOpenSubmenu(index);
    }
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0);
      if (currentScrollY > lastScrollY.current + 10) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };


  return (
    <>
      <Head>
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <div
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? `fixed bg-white  border-b text-black ${hidden ? "-translate-y-full" : "translate-y-0"}`
          : "absolute bg-transparent text-white border-none"
          }`}
      >
        <div className="mx-auto flex items-center justify-between gap-[200px] md:px-20 px-10 lg:py-5 py-6">
          <div className="flex justify-between items-center w-full ">
            <Link href="/" className="flex-shrink-0">
              {scrolled ? (
                <div className="w-20 sm:w-28 md:w-32 lg:w-40 h-full">
                  <img
                    src="/Logo/blacklogo.png"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-20 sm:w-28 md:w-32 lg:w-40 h-ful">
                  <img
                    src="/Logo/whitelogo.png"
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </Link>

            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-10 items-center">
            <div className="flex justify-center items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="z-10 w-screen max-w-sm overflow-hidden rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                        <div className="p-2">{about.map((item) => (
                          <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100">
                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                              <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                            </div>
                            <NavigationMenuLink asChild>
                              <div className="flex-auto">
                                <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">{item.name}<span className="absolute inset-0" /></Link>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                            </NavigationMenuLink>
                          </div>))}
                        </div>
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
                      <div className="z-10 w-screen max-w-sm rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                        <div className="p-2">
                          {engineering.map((item, index) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100"
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={handleMouseLeave}
                            >
                              <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600 transition-colors duration-200" />
                              </div>
                              <NavigationMenuLink asChild>
                                <div className="flex-auto flex items-center justify-between">
                                  <div>
                                    <Link href={item.href || "#"} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                      {item.name}
                                      <span className="absolute inset-0" />
                                    </Link>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                  </div>
                                  {item.children && <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-2 duration-200" />}
                                </div>
                              </NavigationMenuLink>
                              {item.children && openSubmenu === index && (
                                <div className="absolute left-[99%] -top-60 2xl:-top-40 ml-2 w-96 bg-white shadow-lg rounded-xl p-2 ring-1 ring-gray-900/5 z-50">
                                  {item.children.map((child) => (
                                    <div key={child.name} className="group/submenu relative">
                                      <NavigationMenuLink asChild>
                                        <Link href={child.href || "#"} className="flex items-center gap-x-6 p-4 rounded-lg text-sm/6 hover:bg-gray-100">
                                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover/submenu:bg-white">
                                            <child.icon aria-hidden="true" className="size-6 text-gray-600 group-hover/submenu:text-indigo-600 transition-colors duration-200" />
                                          </div>
                                          <div className="flex-auto">
                                            <div className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">{child.name}</div>
                                            <p className="mt-1 text-gray-600">{child.description}</p>
                                          </div>
                                        </Link>
                                      </NavigationMenuLink>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>


              {/* <nav className="relative">
                <ul className="flex gap-4">
                  <li
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="inline-flex gap-1 h-9 w-max items-center justify-center rounded-md 2xl:px-5 px-3 2xl:text-[1rem] text-sm font-medium">
                      Engineering Design Services
                      <ChevronUpIcon className={`w-3 h-3 transition-transform duration-500 ${openMenu ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    {openMenu && (
                      <div className="absolute left-0 top-8 mt-2 w-96 bg-white shadow-lg rounded-xl p-4">
                        {engineering.map((item, index) => (
                          <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => item.children && setOpenSubmenu(index)}
                            onMouseLeave={() => setOpenSubmenu(null)}
                          >
                            <Link href={item.href || "#"}>
                              <div className="group flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-100">
                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                  {item.icon && <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />}
                                </div>
                                <div className="flex-auto">
                                  <h2 className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">{item.name}</h2>
                                  <p className="text-gray-600 text-xs">{item.description}</p>
                                </div>
                                {item.children && <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-2 duration-200" />}
                              </div>
                            </Link>
                            {item.children && openSubmenu === index && (
                              <div className="absolute left-[99%] -top-20 ml-2 w-96 bg-white shadow-lg rounded-xl p-4 ring-1 ring-gray-900/5">
                                {item.children.map((child) => (
                                  <Link href={child.href || "#"} key={child.name}>
                                    <div className="flex group items-center gap-x-6 p-4 rounded-lg text-sm hover:bg-gray-100">
                                      <div className="flex size-11 items-center justify-center flex-none bg-gray-100 rounded-lg group-hover:bg-white">
                                        {child.icon && <child.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />}
                                      </div>
                                      <div className="flex-auto">
                                        <h2 className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">{child.name}</h2>
                                        <p className="text-gray-600 text-xs">{child.description}</p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                </ul>
              </nav> */}


              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Manufacturing Service</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="z-10 w-screen max-w-sm overflow-hidden rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                        <div className="p-2">
                          {manufactring.map((item) => (
                            <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100">
                              <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                              </div>
                              <NavigationMenuLink asChild>
                                <div className="flex-auto">
                                  <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                  <p className="mt-1 text-gray-600">{item.description}</p>
                                </div>
                              </NavigationMenuLink>
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
                    <Link href="/iot" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Internet of Things
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="z-10 w-screen max-w-[250px] overflow-hidden rounded-xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in ">
                        <div className="p-2">
                          {resources.map((item) => (
                            <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100">
                              <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                              </div>
                              <NavigationMenuLink asChild>
                                <div className="flex-auto">
                                  <Link href={item.href} className="block font-semibold text-gray-900 2xl:text-[1rem] text-sm">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                  <p className="mt-1 text-gray-600">{item.description}</p>
                                </div>
                              </NavigationMenuLink>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {/* <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/case-study" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Case Studies
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/contact-us" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contact Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden z-50">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:max-w-sm sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="">
                  <img src="/Logo/blacklogo.png" alt="logo" className="h-8" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="ml-10 block items-center justify-center rounded-md p-2.5"
                >
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {/* About Us Section */}
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                            About Us
                            <ChevronDownIcon
                              aria-hidden="true"
                              className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...about].map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                passHref
                                onClick={handleLinkClick}
                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    {/* Engineering Design Services Section */}
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                            Engineering Design Services
                            <ChevronDownIcon
                              aria-hidden="true"
                              className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...engineeringmob].map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                passHref
                                onClick={handleLinkClick}
                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    {/* Electronic Design Section */}
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                            Electronic Design
                            <ChevronDownIcon
                              aria-hidden="true"
                              className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...design].map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                passHref
                                onClick={handleLinkClick}
                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    {/* Manufacturing Services Section */}
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                            Manufacturing Services
                            <ChevronDownIcon
                              aria-hidden="true"
                              className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...manufactring].map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                passHref
                                onClick={handleLinkClick}
                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    {/* Internet of Things Link */}
                    <Link
                      href="/iot"
                      passHref
                      onClick={handleLinkClick}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Internet of Things
                    </Link>

                    {/* Case Studies Link */}
                    {/* <Link
                      href="/case-study"
                      passHref
                      onClick={handleLinkClick}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Case Studies
                    </Link> */}

                    {/* Resources Section */}
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                            Resources
                            <ChevronDownIcon
                              aria-hidden="true"
                              className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...resources].map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                passHref
                                onClick={handleLinkClick}
                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    {/* Contact Us Link */}
                    <Link
                      href="/contact-us"
                      passHref
                      onClick={handleLinkClick}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default NavLinks;

