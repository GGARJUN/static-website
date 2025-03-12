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
        Custom PCB Design
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Creating PCBs tailored to meet specific project requirements.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Multi-Layer PCBs
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Designing complex multi-layer boards with BGA and QFN packages.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        High-Speed PCB Design
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Developing PCBs with differential pairs and length matching.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Mixed Signal PCB Design
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Handling both analog and digital circuits with critical signal routing.
        </p>
      </div>
    );
  };
  const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        PCB Prototyping and Manufacturing
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Offering complete PCB prototyping and manufacturing services.
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
        "https://img.freepik.com/free-photo/man-engaged-household-task_23-2151741218.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        ti:"Hello"
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/free-photo/technology-background-texture_23-2148105526.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/free-photo/top-view-circuit-board-close-up_23-2149174319.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://img.freepik.com/free-photo/multi-dimensional-urban-space-exotic-concepts-digital-painting_456031-82.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      id: 5,
      content: <SkeletonFive />,
      className: "md:col-span-3",
      thumbnail:
        "https://img.freepik.com/free-photo/smart-industry-robot-arms-digital-factory-production-technology-showing-automation-manufacturing-process-industry-40-4th-industrial-revolution-iot-software-control-operation_587448-8172.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
  ];
  return (

      <div className='w-full h-screen'>
      <div className='container mx-auto px-16'>
        <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Expertise</h2>
        <h1 className='text-5xl font-bold my-5 max-w-4xl'><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>Our PCB </span>design expertise</h1>
      </div>
        <LayoutGrid cards={cards} />
      </div>

  )
}

export default Expertise
