'use client';
import Tables from '@components/Tables';
import ExperimentalTable from '@components/ExperimentalTable';

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
            <ExperimentalTable content={DummySurficial}
              actions={handleActions}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurficialMarkers