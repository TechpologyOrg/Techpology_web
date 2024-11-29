"use client";
import React, {ReactElement, useState} from 'react';
import Image from "next/image";
import bg from '../../public/TopLight.png'
import TP_Btn from "./Components/TP_Btn";
import TP_Input from "./Components/TP_Input";

import Cosmos_input from "./ui/Cosmos_input"
import Cosmos_text from "./ui/Cosmos_text"

import { SiKubernetes } from "react-icons/si";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";

export default function Home() {
  const [get_firstname, set_firstname] = useState<string>("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-0 absolute top-0 w-full h-screen bg-top bg-cover lg:bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg.src})`}}></div>
      <div className="w-full h-full z-10">

        <div className="w-full flex flex-col items-center justify-center mt-18 pt-[90px] md:pt-[180px] lg:px-0 px-8">
          <img src="./tp.svg" className="mb-[30px]"/>
          <p className="lg:text-[64px] text-[40px] lg:leading-[73px] leading-[48px] font-extralight text-center uppercase">Techpology Cloud.</p>
          <p className="lg:text-[64px] text-[40px] lg:leading-[73px] leading-[48px] brightness-200 tracking-[6px] font-medium text-center uppercase text-transparent bg-clip-text bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url('./Gradient.gif')`}}>
            Vaporize your data
          </p>
          <p className="lg:text-[24px] text-[18px] lg:leading-[28px] leading-[22px] text-white font-light uppercase text-center mt-[32px]">
            Experience the most efficient data storage system<br/>And the most secure data transfer system on the market.
          </p>
		  {/*<TP_Btn text="Get in touch" class_name="mt-[40px]"></TP_Btn>*/}
        </div>

        <div className="w-full py-4 flex items-center justify-center mt-[80px]">
          <div className="lg:w-[60%] lg:h-[34vw] w-[90%] h-[50vw] bg-white rounded-3xl flex items-center justify-center">
            <div className="w-[97%] h-[95%]  rounded-[22px] overflow-hidden flex items-center justify-center">
              <video src="./f2.mp4" controls></video>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-col md:flex-row flex-wrap items-center justify-evenly w-full mt-4 md:gap-0 gap-16 md:h-[400px]'>

        <div className='flex flex-col items-center justify-center text-center w-[340px]'>
          <FaArrowDownWideShort size={64}></FaArrowDownWideShort>
          <p className='w-[240px] text-[24px] font-semibold'>~78% less storage requirements</p>
          <p>
            We're the only deduplication algorithm to not require duplicates.
            We can deliver a minimum of 60% better compression than any other deduplication algorithm on the market.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center text-center w-[340px]'>
          <FaAward size={64}></FaAward>
          <p className='w-[240px] text-[24px] font-semibold'>Award winning</p>
          <p>
            We have multiple patents, have won 2 international awards with our system and are working on participating in more competitions.
            We are also validated by world leading database scientists.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center text-center w-[340px]'>
          <SiKubernetes size={64}></SiKubernetes>
          <p className='w-[240px] text-[24px] font-semibold'>Built to scale</p>
          <p>
            The entire system runs on kubernetes and is easy to deploy. It scales based on demands and is built to be fail safe and scalable from day one.
          </p>
        </div>

      </div>

      <div className='flex flex-col w-full mt-8 items-center justify-center'>
        <p className='text-[42px] font-bold'>Contact Us</p>
        <form className='flex flex-col md:w-[700px] mt-8 px-4 gap-4'>
          <div className='flex flex-row flex-wrap items-center justify-center md:justify-between md:gap-0 gap-4'>
            <div className='flex flex-col gap-1'>
              <p>Fullname</p>
              <input className='px-4 py-1 rounded-full' name="fullname" placeholder="fullname" type='text'></input>
            </div>

            <div className='flex flex-col gap-1'>
              <p>Email</p>
              <input className='px-4 py-1 rounded-full' name="email" placeholder="e-mail" type='text'></input>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <p>Message</p>
            <textarea className='rounded-xl h-[200px]'></textarea>
          </div>

          <div className='flex flex-row w-full justify-end items-center'>
            <button type='submit' className='bg-blue-500 rounded-lg px-5 py-1'>Send</button>
          </div>
        </form>
      </div>

      <div className='h-[140px] w-full flex items-center justify-center py-4 bg-black mt-8'>
          <img src="./tp.svg"/>
      </div>
    </main>
  );
}
