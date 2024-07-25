import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { LuUpload } from "react-icons/lu";
import { motion } from "framer-motion"

function Card({ data, reference}) {
  return (
    <motion.div 
    drag 
    dragConstraints={reference} 
    whileDrag={{scale: 0.7}} 
    dragElastic={0.1}
    dragTransition={{bounceStiffness:100, bounceDamping:50}}
    className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-7 py-7 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0 '>
      <div className='  flex items-center justify-between mb-1 px-5 py-3'>
        <h5>{data.filesize} </h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose size=".7em" color='#fff' /> : <LuDownload size=".7em" color='#fff'  /> }
        
        </span>
      </div>
      {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
       <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
      </div> 
        )}
      
      </div>
    </motion.div>
  )
}

export default Card
