import { FaRegLightbulb, FaMedal, FaSearch, FaCheckCircle } from "react-icons/fa";
import { AiOutlineRocket, AiOutlineCheckCircle } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa6";
import Image from "next/image";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function Dummy() {

    const StatCard = ({ icon, number, text, bgColor }) => (
        <div
            className={`flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${bgColor}`}
        >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md mb-4 text-red-500">
                {icon}
            </div>
            <h3 className="text-3xl font-bold text-white">{number}</h3>
            <p className="text-white opacity-90 text-sm">{text}</p>
        </div>
    );

    const StepCard = ({ step, title, text, icon }) => (
        <div className="relative flex flex-col items-start bg-gradient-to-br from-[#0A1F44] to-[#112D5A] text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            {/* Step Number Badge */}
            <div className="absolute -top-5 -left-4 w-9 rounded-full h-9 flex items-center justify-center text-xl font-bold text-white bg-blue-500 shadow-md">
                {step}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md mb-4 text-blue-500">
                {icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{text}</p>
        </div>
    );

    return (
        <div className="relative mt-20 bg-[#071342] py-24 bg-[url('https://html.awaikenthemes.com/corprate/images/how-we-work-bg-image.png')] bg-cover bg-center bg-fixed">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
                    <StatCard
                        icon={<FaRegLightbulb size={30} />}
                        number={<div className="flex items-center gap-2">
                            <NumberTicker
                            value={10} 
                            className="whitespace-pre-wrap  font-medium tracking-tighter text-white"
                          /><p> K+</p>
                        </div>}
                        text="We have successfully delivered 10K+ projects."
                        bgColor="bg-gradient-to-r from-blue-500 to-indigo-600"
                    />
                    <StatCard
                        icon={<AiOutlineRocket size={30} />}
                        number={<div className="flex items-center gap-2">
                            <NumberTicker
                            value={924} 
                            className="whitespace-pre-wrap  font-medium tracking-tighter text-white"
                          /><p> +</p>
                        </div>}
                        text="We have successfully launched over marketing campaigns."
                        bgColor="bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                    <StatCard
                        icon={<AiOutlineCheckCircle size={30} />}
                        number={<div className="flex items-center gap-2">
                            <NumberTicker
                            value={97} 
                            className="whitespace-pre-wrap  font-medium tracking-tighter text-white"
                          /><p> %</p>
                        </div>}
                        text="We pride ourselves on maintaining a 97% success."
                        bgColor="bg-gradient-to-r from-green-500 to-teal-500"
                    />
                    <StatCard
                        icon={<FaMedal size={30} />}
                        number={<div className="flex items-center gap-2">
                            <NumberTicker
                            value={32} 
                            className="whitespace-pre-wrap  font-medium tracking-tighter text-white"
                          /><p> +</p>
                        </div>}
                        text="We've been honored with 32+ industry awards."
                        bgColor="bg-gradient-to-r from-orange-500 to-red-500"
                    />
                </div>

                {/* How We Work Section */}
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-12 lg:col-span-8 gap-12 items-center justify-between">
                        <div>
                            <h3 className="text-md mb-3 text-red-500 font-bold flex items-center gap-2"><div className="rounded-full w-2 h-2 bg-red-600 mb-1"></div> How We Work ?</h3>
                            <h2 className="text-5xl font-bold">
                                Driving <span className="text-red-500">innovation</span> <br />
                                collaborative solutions
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                <StepCard
                                    step="1"
                                    title="Discovery & Consultation"
                                    text="We begin with an in-depth consultation to understand your vision, goals, and challenges."
                                    icon={<FaSearch size={24} />}
                                />
                                <StepCard
                                    step="2"
                                    title="Concept Development"
                                    text="We brainstorm ideas and create initial concepts. We present these concepts to you for feedback."
                                    icon={<FaLightbulb size={24} />}
                                />
                                <StepCard
                                    step="3"
                                    title="Delivery & Ongoing Support"
                                    text="After thorough testing, we officially launch your project. Our team ensures a smooth transition and is on hand."
                                    icon={<FaCheckCircle size={24} />}
                                />
                            </div>
                        </div>
                        </div>

                        {/* Image */}
                        <div className="col-span-12 lg:col-span-4 ">
                            <Image width={500} height={700} priority
                                src="https://img.freepik.com/free-photo/team-working-together-project_23-2149325440.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt="Teamwork"
                                className="rounded-lg shadow-lg w-full lg:w-[450px]"
                            />
                        </div>
                    
                </div>
            </div>
        </div>
    );
}


