'use client';
import Tables from '@components/Tables';
import Table from '@components/Table';

const SurficialMarkers = () => {

  const DummySurficial = {
    headers: [
      "Date",
      "Time",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "Nag-sukat"
    ],
    data: [
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "John Geliberte"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "David guevarra"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Philline Efondo"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Carla Joy Orubia"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Jeremiah de guzman"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "John Geliberte"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "David guevarra"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Philline Efondo"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Carla Joy Orubia"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Jeremiah de guzman"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "John Geliberte"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "David guevarra"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Philline Efondo"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Carla Joy Orubia"
      },
      {
        date: "September 6, 2023",
        time: "07:30 AM",
        A: "0",
        B: "0",
        C: "0",
        D: "0",
        E: "0",
        F: "0",
        G: "0",
        H: "0",
        I: "0",
        J: "0",
        measurer: "Jeremiah de guzman"
      }
    ]
  }

  const handleUpdate = () => {
    console.log("HANDLE UPDATE")
  }

  const handleDelete = () => {
    console.log("HANDLE DELETE")
  }

  const handleView = () => {
    console.log("HANDLE VIEW")
  }

  const handleActions = () => {
    return {
      handleUpdate,
      handleDelete,
      handleView
    }
  }

  return (
    <div className="w-full pb-20">
      <div className="text-center pt-5">
        <div className="container mx-auto px-10">
          <div>
            <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
              Surficial Markers
            </h4>
            <Table content={DummySurficial}
              actions={handleActions}
            />
          </div>
          <div>
            <button type="button" className="text-white bg-primary-blue rounded-md p-2">
              <div className="flex justify-center items-center">
                <span className="pr-2">Add Surficial Measurement</span>
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13v3m3-3v3M7 7H4m3-3H4m3 6H4m6 3v3m8-3H7V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v17h17a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurficialMarkers