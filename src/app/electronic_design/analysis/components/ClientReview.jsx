import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const ClientReview = () => {

    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },

    ];
    const reviews = [
        {
            name: "John Doe",
            role: "Software Engineer",
            review:
                "Partnering with SunKey Technologies gives you access to a team of skilled engineers who are dedicated to delivering high-quality hardware designs. We prioritize customer satisfaction and work closely with you to understand your unique requirements. Our expertise in using advanced design tools ensures that your products are both innovative and reliable.",
            img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            name: "Alice Smith",
            role: "Product Manager",
            review:
                "Partnering with SunKey Technologies gives you access to a team of skilled engineers who are dedicated to delivering high-quality hardware designs. We prioritize customer satisfaction and work closely with you to understand your unique requirements. Our expertise in using advanced design tools ensures that your products are both innovative and reliable.",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            name: "Michael Johnson",
            role: "Hardware Engineer",
            review:
                "Partnering with SunKey Technologies gives you access to a team of skilled engineers who are dedicated to delivering high-quality hardware designs. We prioritize customer satisfaction and work closely with you to understand your unique requirements. Our expertise in using advanced design tools ensures that your products are both innovative and reliable.",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
    ];

    const names = [
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-1.svg", title: "Best financial advice" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-2.svg", title: "Innovative Approach" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-3.svg", title: "Client Centric Focused" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-4.svg", title: "Comprehensive Services" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-5.svg", title: "sustainability" },
        { img: "https://html.awaikenthemes.com/corprate/images/icon-facility-item-6.svg", title: "24/7 maintenance" },

    ]

    const svg = [{ start: "/star.svg" }, { start: "/star.svg" }, { start: "/star.svg" }, { start: "/star.svg" },]

    return (
        <div className="relative  bg-[url('https://html.awaikenthemes.com/corprate/images/testimonial-bg-image.png')] bg-secondary bg-repeat-x bg-cover py-24 ">
            <div className='px-16 container mx-auto'>
                    <div className='w-full'>
                        <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Client review</h2>
                        <h1 className='text-5xl font-bold my-5 '><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>What our clients</span> have to say about working with us</h1>
                    </div>

                    <div className=' mt-20'>
                        <div className='flex items-center gap-32 '>
                            <img src="https://html.awaikenthemes.com/corprate/images/client-logo.svg" alt="" />
                            <div className='flex  gap-9'>
                                <div className="flex  ">
                                    <AnimatedTooltip items={people} />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <div className='flex gap-1'>
                                        <h2 className='font-bold text-xl'>4.5</h2>
                                        <div className='flex w-full items-center justify-center gap-'>
                                            {svg.map((item, index) => (
                                                <img key={index} src={item.start} alt="" className='w-7 h-7 -mt-1' />
                                            ))}
                                        </div>
                                    </div>
                                    <h1>(1000+ review)</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 -ml-5">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                grabCursor={true}
                                pagination={{
                                    el: ".custom-pagination",
                                    type: "custom",
                                    renderCustom: (swiper, current, total) =>
                                        `<span class="text-xl font-bold text-gray-400  mx-2">${current} / ${total}</span>`
                                }}
                            >
                                {reviews.map((review, index) => (
                                    <SwiperSlide key={index}>
                                        <div className=" p-6 rounded-lg ">
                                            <h2 className="text-2xl font-extrabold text-gray-800">
                                                Client Review
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-700">{review.review}</p>
                                            <div className="mt-6 flex items-center gap-5">
                                                <img
                                                    src={review.img}
                                                    alt={review.name}
                                                    className="w-20 h-20 object-cover rounded-full"
                                                />
                                                <div>
                                                    <h1 className="text-xl font-extrabold text-blue-600">
                                                        {review.name}
                                                    </h1>
                                                    <h1 className="text-gray-600">{review.role}</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))}
                                <div className="custom-pagination text-end"></div>
                            </Swiper>
                        </div>
                    </div>


                <div className='w-full border my-20 border-gray-200/70'></div>
                <div className="overflow-hidden whitespace-nowrap w-full bg-gray-100 ">
                    <div className="flex gap-10 animate-marquee">
                        {names.concat(names).map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 min-w-[200px]">
                                <img src={item.img} alt={item.title} className="w-14" />
                                <h2 className="font-bold text-lg text-blue-900">{item.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientReview
