"use client";

import React from 'react'
import { Tabs } from "@/components/ui/tabs";
import DummyContent from './components/DummyContet';


const TabsArea = () => {

    const tabs = [
        {
          title: "Product",
          value: "product",
          content: (
            <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Product Tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Services",
          value: "services",
          content: (
            <div className="w-full overflow-hidden relative h-96  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Services tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Playground",
          value: "playground",
          content: (
            <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Playground tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Content",
          value: "content",
          content: (
            <div className="w-full overflow-hidden relative h-96  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Content tab</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Random",
          value: "random",
          content: (
            <div className="w-full overflow-hidden relative h-96  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Random tab</p>
              <DummyContent />
            </div>
          ),
        },
      ];


    return (
        <div className="h-[20rem] md:h-[40rem] relative b flex flex-col  mx-20 w-full  items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
    )
}

export default TabsArea
