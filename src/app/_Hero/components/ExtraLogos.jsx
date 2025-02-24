import React from 'react'
import logoBbc from "../../../../public/logos/bbc.svg"
import logoCbs from "../../../../public/logos/cbs.svg"
import logoCnn from "../../../../public/logos/cnn.svg"
import logoFast from "../../../../public/logos/fast-company.svg"
import logoForbes from "../../../../public/logos/forbes.svg"
import logoHuff from "../../../../public/logos/huffpost.svg"
import logoTech from "../../../../public/logos/techcrunch.svg"
import Image from 'next/image'

const ExtraLogos = () => {
    const logos =[
        {_id:1, title:"BBC", logo:logoBbc},
        {_id:2, title:"CBS", logo:logoCbs},
        {_id:3, title:"CNN", logo:logoCnn},
        {_id:4, title:"FAST", logo:logoFast},
        {_id:5, title:"Forbes", logo:logoForbes},
        {_id:6, title:"HUFF", logo:logoHuff},
        {_id:7, title:"TECH", logo:logoTech},

    ]
  return (
    <div className='relative mt-56 lg:col-span-7 lg:mt-0 xl:col-span-6'>
      <p className='text-center text-lg font-semibold text-gray-900 lg:text-left'>As Featured in</p>
      <ul role='list' className='mx-auto mt-8 flex max-w-screen-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start'>
        {logos.map(({title,_id,logo}) => (
            <li key={_id}>
                <Image src={logo} alt={title} className="h-8" unoptimized />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ExtraLogos
