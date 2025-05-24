import Image from "next/image";
import Banner from '../../public/images/banner.png'

export default function Home() {
  return (
    <div className="container h-[10000px]">
      <div>
        <Image src={Banner} alt="banner" />
      </div>
    </div>
  );
}
