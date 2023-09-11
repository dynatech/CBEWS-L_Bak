import React from 'react'
import Rainfall from '@components/Graphs/Rainfall';

const RainfallGraph = () => {
  return (
    <div className="container mx-auto px-10">
      <div>
        <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
          Rainfall Graph
        </h4>
        <div className='flex flex-col gap-10'>
          <Rainfall />
        </div>
      </div>
    </div>
  )
}

export default RainfallGraph