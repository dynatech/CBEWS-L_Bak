import React from 'react'
import Subsurface from '@components/Graphs/Subsurface';

const SubsurfaceGraph = () => {
  return (
    <div className="container mx-auto px-10">
      <div>
        <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
          Subsurface Graph
        </h4>
        <div className='flex flex-col gap-10'>
          <Subsurface />
        </div>
      </div>
    </div>
  )
}

export default SubsurfaceGraph