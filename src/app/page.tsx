import Image from "next/image";
import Banner from '../../public/images/banner.png'
import CarouselProducts from "@/components/CarouselProducts";

export default function Home() {
  return (
    <div className="container pb-8">
      <div>
        <Image src={Banner} alt="banner" />
        <div className="bg-[#025FCA] p-8 rounded-b-xl">
          <CarouselProducts />
        </div>
      </div>
    </div>
  );
}
