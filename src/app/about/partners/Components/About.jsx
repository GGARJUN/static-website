import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion";
import Image from 'next/image';


const About = () => {
  const features = [
    { name: 'John', description: 'PHP Developer', img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { name: 'Sunil', description: 'Software Developer', img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100278.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { name: 'Mesain', description: 'React Developer', img: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { name: 'Robert', description: 'Mobile App Developer', img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100279.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { name: 'Nelsan', description: 'Website Developer', img: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034029.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { name: 'Aravind', description: 'UX Developer', img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { name: 'Mesain', description: 'React Developer', img: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { name: 'Robert', description: 'Mobile App Developer', img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
  ]


  const names = [
    { img: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg", title: "Best financial advice" },
    { img: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg", title: "Innovative Approach" },
    { img: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg", title: "Client Centric Focused" },
    { img: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg", title: "Comprehensive Services" },
    { img: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg", title: "sustainability" },
    { img: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg", title: "24/7 maintenance" },

  ]
  return (
    <div className="bg-white">
      <div className=" grid grid-cols-1 items-start gap-x-8 gap-y-16 lg:grid-cols-2 ">
        <div>
          <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Partners</h2>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-5">Technical Specifications</h2>
          <p className="mt-4 text-gray-800">
            At Sunkey Design Systems, we empower businesses to innovate and thrive in the rapidly evolving tech landscape. Our team of experts provides comprehensive engineering design services, electronic design solutions, manufacturing capabilities, and IoT innovations that drive success. With a focus on quality, reliability, and customer satisfaction, we help our clients achieve their goals efficiently.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature,index) => (
              <div key={index} className="border-t border-gray-200 pt-4">
                <div className='flex  items-center  gap-3'>
                  <Image priority height={20} width={40} src={feature.img} alt={feature.name} className='w-16 h-16 rounded-full object-cover' />
                  <div>
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image width={1000} height={500} priority
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://img.freepik.com/free-photo/happy-joyful-female-woman-posing_74855-2895.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
            className="rounded-lg bg-gray-100 h-full w-full object-cover"
          />
          <Image width={1000} height={500} priority
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
            className="rounded-lg bg-gray-100 h-full w-full object-cover"
          />
          <Image width={1000} height={500} priority
            alt="Side of walnut card tray with card groove and recessed card area."
            src="https://img.freepik.com/free-photo/handsome-man-presenting-something_1368-87.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
            className="rounded-lg bg-gray-100 h-full w-full object-cover"
          />
          <Image width={1000} height={500} priority
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="https://img.freepik.com/free-photo/portrait-beautiful-girl-white-background_176420-55770.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
            className="rounded-lg bg-gray-100 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className='w-full border mt-20 border-gray-200/70'></div>

      <div className="bg-white pt-20 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>

          <div className="overflow-hidden whitespace-nowrap w-full mt-20 ">
            <div className="flex gap-10 animate-marquee">
              {names.concat(names).map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3 min-w-[200px]">
                  <Image priority src={item.img} alt={item.title}  width={158}
                    height={48} />

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
