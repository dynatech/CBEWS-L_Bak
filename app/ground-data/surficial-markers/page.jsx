'use client';
import Tables from '@components/Tables';
import ExperimentalTable from '@components/ExperimentalTable';

const SurficialMarkers = () => {

  const TABLE_HEADERS = [
    "Date",
    "Time",
    "A",
    "B",
    "C",
    "D",
    "Nag-sukat"
  ];

  const TABLE_CONTENT = [];

  return (
    <div className="w-full pb-20">
      <div className="text-center pt-5">
        <div className="container mx-auto px-10">
          <div>
            <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
              Surficial Markers
            </h4>
            {/* <Tables
              headers={TABLE_HEADERS}
              content={TABLE_CONTENT}
              
              actions={() => { }} /> */}

              <ExperimentalTable/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurficialMarkers