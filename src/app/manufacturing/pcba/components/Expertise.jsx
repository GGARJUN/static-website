import { LayoutGrid } from '@/components/ui/layout-grid';
import { SquareArrowOutUpRight } from 'lucide-react'
const Expertise = () => {
  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/8004/8004316.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "CAD Design", description: "Utilizing tools like PTC Windchill and Altair CAE Suite to create detailed designs." },
    { img: "https://cdn-icons-png.freepik.com/256/6864/6864012.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Prototyping", description: "Developing functional prototypes to test and refine your product.", },
    { img: "https://cdn-icons-png.freepik.com/256/3696/3696916.png?uid=R110556143&ga=GA1.1.1704431159.1736575258", title: "Design for Manufacturability", description: "Ensuring designs are optimized for efficient production.", },
    { img: "https://cdn-icons-png.freepik.com/256/935/935559.png?uid=R110556143&ga=GA1.1.1704431159.1736575258", title: "Thermal and Structural Analysis", description: "Conducting analyses to ensure product reliability and performance.", },
  ];

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Surface Mount Technology (SMT)
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Assembling surface-mount components with precision.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Through-Hole Technology (THT)
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Inserting through-hole components with accuracy.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Mixed Assembly
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Combining SMT and THT components for greater design flexibility.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Reflow Soldering
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Using advanced reflow ovens for efficient soldering.
        </p>
      </div>
    );
  };
  const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Wave Soldering
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Applying wave soldering for through-hole components.
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://img.freepik.com/free-photo/contemporary-facility-storing-hydrogen-energy_60438-3983.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        ti:"Hello"
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/free-photo/metaverse-concept-collage-design_23-2149419858.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/free-photo/army-robots-with-leader_1048-11635.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://img.freepik.com/free-photo/futuristic-robot-hummingbird_23-2151443867.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      id: 5,
      content: <SkeletonFive />,
      className: "md:col-span-3",
      thumbnail:
        "https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-99785.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
  ];
  return (

      <div className='w-full h-screen'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Expertise</h2>
        <h2 className='title-all font-bold my-5 max-w-4xl'><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>Our PCBA </span>design expertise</h2>
      </div>
        <LayoutGrid cards={cards} />
      </div>

  )
}

export default Expertise
