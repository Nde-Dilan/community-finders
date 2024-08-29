import Image from 'next/image'
import React from 'react'

const Event = ({title,
  date,
  description,
  image}:EventProps) => {
  return (
    <div className="border-2 lg: lg:m-2 cursor-pointer p-2 m-1">
      <div className="flex justify-between flex-col">
      <Image width={100} height={100} src={image} alt={title} className="w-full" />
        <h2 className="md:text-2xl font-bold">{title}</h2>
        
      </div>
      <p className="text-sm font-bold">{date}</p>
      <p className="text-gray-500">{description}</p>
     
    </div>
  )
}

export default Event