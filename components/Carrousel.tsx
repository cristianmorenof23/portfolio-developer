import Image from "next/image";
import Link from "next/link";

const Carrousel = () => {
  return (
    <>
      <div className="carousel  md:h-[280px] w-full md:w-[900px]">
        <div id="item1" className="carousel-item w-full">
          <Image
            src="/crashtracker1.png"
            className="w-full"
            width={900}
            height={900}
            alt="imagen"
            priority
            quality={100}
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image
            src="/crashtracker2.png"
            className="w-full"
            width={900}
            height={900}
            alt="imagen"
            priority
            quality={100}
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image
            src="/crashtracker3.png"
            className="w-full"
            width={900}
            height={900}
            alt="imagen"
            priority
            quality={100}
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Image
            src="/crashtracker4.png"
            className="w-full"
            width={900}
            height={900}
            alt="imagen"
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2 text-center items-center">
        <Link href="#item1" className="btn btn-md">
          1
        </Link>
        <Link href="#item2" className="btn btn-md">
          2
        </Link>
        <Link href="#item3" className="btn btn-md">
          3
        </Link>
        <Link href="#item4" className="btn btn-md">
          4
        </Link>
      </div>
    </>
  );
};

export default Carrousel;
