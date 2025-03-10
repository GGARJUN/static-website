import dynamic from "next/dynamic";

const WhoWeAre = dynamic(() => import("@/pages/About/WhoWeAre/page"));

const WhoWeArePage = () => {
  return (
    <main>
      <WhoWeAre />
    </main>
  );
};

export default WhoWeArePage;