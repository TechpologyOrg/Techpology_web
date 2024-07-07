{'client-only'}
import Image from "next/image";
import bg from '../../public/TopLight.png'
import TP_Btn from "./Components/TP_Btn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-0 absolute top-0 w-full h-screen bg-top bg-cover lg:bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg.src})`}}></div>
      <div className="w-full h-full z-10">

        <div className="w-full flex flex-col items-center justify-center mt-18 pt-[180px] lg:px-0 px-8">
          <img src="./tp.svg" className="mb-[30px]"/>
          <p className="lg:text-[64px] text-[40px] lg:leading-[73px] leading-[48px] font-extralight text-center uppercase">Techpology Cloud.</p>
          <p className="lg:text-[64px] text-[40px] lg:leading-[73px] leading-[48px] brightness-200 tracking-[6px] font-medium text-center uppercase text-transparent bg-clip-text bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url('./Gradient.gif')`}}>
            Vaporize your data
          </p>
          <p className="lg:text-[24px] text-[18px] lg:leading-[28px] leading-[22px] text-white font-light uppercase text-center mt-[32px]">
            Experience the most efficient data storage system<br/>And the most secure data transfer system on the market.
          </p>
          <TP_Btn text="Get in touch" class_name="mt-[40px]"></TP_Btn>
        </div>

        <div className="w-full py-4 flex items-center justify-center mt-[80px]">
          <div className="lg:w-[60%] lg:h-[34vw] w-[90%] h-[50vw] bg-white rounded-3xl flex items-center justify-center">
            <div className="w-[97%] h-[95%]  rounded-[22px] overflow-hidden flex items-center justify-center">
              <video src="./f2.mp4" controls></video>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
