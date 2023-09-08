import Rainfall from "@components/Graphs/Rainfall"
import Subsurface from "@components/Graphs/Subsurface"
import Surficial from "@components/Graphs/Surficial"
import Earthquake from "@components/Graphs/Earthquake"

const DataAnalysis = () => {
  return (
    <div className="container mx-auto px-10">
      <div>
        <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
          Data Analysis Summary
        </h4>
        <div className='flex flex-col gap-10'>
          <Rainfall />
          <Subsurface />
          <Surficial />
          <Earthquake />
        </div>
      </div>
    </div>
  )
}

export default DataAnalysis