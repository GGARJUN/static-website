import { LayoutGrid } from '@/components/ui/layout-grid';
const Expertise = () => {


  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Custom Fixture Design
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Designing fixtures tailored to your product's testing requirements.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Fixture Manufacturing
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Building fixtures with precision and quality.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Integration with Automated Testing Systems
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Ensuring compatibility with automated testing equipment.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Testing and Validation
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Conducting thorough testing to ensure fixture reliability.
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
        "https://img.freepik.com/free-vector/vector-evolution-robots-vacuum-cleaner-concept_1441-2907.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      ti: "Hello"
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/free-photo/male-car-mechanic-working-car-repair-shop_23-2150367531.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://img.freepik.com/free-vector/polygonal-wireframe-handshake-abstract-blue-composition-as-symbol-friendship-business-partnership-vector-illustration_1284-30758.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://img.freepik.com/free-photo/increasing-automation-level-rpa-robotic-process-automation-innovation-technology-concept_587448-4716.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },

  ];
  return (

    <div className='w-full h-screen'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Expertise</h2>
        <h1 className='title-all my-5 max-w-4xl'><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>Our PCBA </span>design expertise</h1>
      </div>
      <LayoutGrid cards={cards} />
    </div>

  )
}

export default Expertise
