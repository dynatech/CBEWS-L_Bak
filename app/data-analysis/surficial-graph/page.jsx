import React from 'react'
import Surficial from '@components/Graphs/Surficial';

const SurficialGraph = () => {
  return (
    <div className="container mx-auto px-10">
      <div>
        <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
          Surficial Graph
        </h4>
        <div className='flex flex-col gap-10'>
          <Surficial />
        </div>
      </div>
    </div>
  )
}

export default SurficialGraph