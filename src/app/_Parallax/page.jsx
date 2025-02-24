import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { HeroParallax } from '@/components/ui/hero-parallax'
import React from 'react'

const Parallax = () => {
    const products = [
        {
          title: "Moonbeam",
          link: "https://gomoonbeam.com",
          thumbnail:
            "https://img.freepik.com/free-photo/high-voltage-tower-isolated-sky_1359-380.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Cursor",
          link: "https://cursor.so",
          thumbnail:
            "https://img.freepik.com/free-photo/electrical-substation-power-distribution-network_91128-4224.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Rogue",
          link: "https://userogue.com",
          thumbnail:
            "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
       
        {
          title: "Editorially",
          link: "https://editorially.org",
          thumbnail:
            "https://img.freepik.com/free-photo/assembly-electrical-panel-electrician-job-robot-with-wires-circuit-breakers_169016-2211.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Editrix AI",
          link: "https://editrix.ai",
          thumbnail:
            "https://img.freepik.com/free-photo/worker-is-cutting-wires-with-lineman-s-pliers_169016-15689.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Pixel Perfect",
          link: "https://app.pixelperfect.quest",
          thumbnail:
            "https://img.freepik.com/free-photo/substation-equipment-dense-lines-blue-tone-map_1127-3225.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
       
        {
          title: "Algochurn",
          link: "https://algochurn.com",
          thumbnail:
            "https://img.freepik.com/free-photo/male-electrician-works-switchboard-overalls-against-backdrop-emergency-lighting_169016-66529.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail:
            "https://img.freepik.com/free-photo/different-electrical-tools-wooden-background-flat-lay_169016-24825.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail:
            "https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-18459.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "SmartBridge",
          link: "https://smartbridgetech.com",
          thumbnail:
            "https://img.freepik.com/free-photo/sun-setting-silhouette-electricity-pylons_1127-2986.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Renderwork Studio",
          link: "https://renderwork.studio",
          thumbnail:
            "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-25050.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
       
        {
          title: "Creme Digital",
          link: "https://cremedigital.com",
          thumbnail:
            "https://img.freepik.com/free-photo/low-angle-shot-electric-linemen-working-pole_181624-46993.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Golden Bells Academy",
          link: "https://goldenbellsacademy.com",
          thumbnail:
            "https://img.freepik.com/free-photo/male-electrician-works-switchboard-overalls-against-backdrop-emergency-lighting_169016-66391.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "Invoker Labs",
          link: "https://invoker.lol",
          thumbnail:
            "https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-16355.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
        {
          title: "E Free Invoice",
          link: "https://efreeinvoice.com",
          thumbnail:
            "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-25055.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        },
      ];
  return (

      <div className="w-full">
      <HeroParallax products={products} />
      </div>


  )
}

export default Parallax
