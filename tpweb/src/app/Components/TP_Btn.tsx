"use client";
import React from 'react'

type TP_Btn_props = {
	text: string;
	class_name?: string;
}

export default function TP_Btn({text, class_name}:TP_Btn_props) {
  return (
	<div className={`px-4 py-2 flex items-center justify-center text-white bg-[#0099FF] rounded-[8px] ${class_name}`}>
		<p className='text-[20px] font-bold text-white'>{text}</p>
	</div>
  )
}
