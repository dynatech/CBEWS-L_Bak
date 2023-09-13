'use client';
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
          <div className={"pt-10"}>
            <button type="button" className="text-white bg-primary-blue rounded-md p-2">
              <div className="flex justify-center items-center">
                <span className="pr-2">Add Surficial Measurement</span>
                <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path xmlns="http://www.w3.org/2000/svg" d="M5.63604 14.1238L7.05026 15.538M8.46447 11.2953L9.87868 12.7096M11.2929 8.46691L12.7071 9.88113M14.1213 5.63849L15.5355 7.0527M2.80762 16.9522L7.05026 21.1948L21.1924 7.0527L16.9498 2.81006L2.80762 16.9522Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurficialMarkers