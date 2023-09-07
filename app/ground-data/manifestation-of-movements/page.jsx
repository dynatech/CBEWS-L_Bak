'use client';
import Table from '@components/Table';

const MoMs = () => {

  const DummyMoMs = {
    headers: [
      "Feature Type",
      "Feature Name",
      "Location",
      "Last Obsesrvance Timestamp",
      "Alert Level"
    ],
    data: [
      {
        feature_type: "Scarp",
        feature_name: "A",
        location: "Near church",
        ts_obs: "N/A",
        alert_level: 0
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
    <div className="container mx-auto px-10">
      <div>
        <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
          Manifestation of Movements
        </h4>
        <Table content={DummyMoMs} actions={handleActions} />
      </div>
      <div className={"pt-10"}>
        <button type="button" className="text-white bg-primary-blue rounded-md p-2">
          <div className="flex justify-center items-center">
            <span className="pr-2">Add Manifestation of Movement</span>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
              <path xmlns="http://www.w3.org/2000/svg" d="M14.2863 14.3822L14.6795 14.0733L14.6795 14.0733L14.2863 14.3822ZM14.1178 15.7863L13.8089 15.3932L13.8089 15.3932L14.1178 15.7863ZM12.7137 15.6178L13.1068 15.3089L13.1068 15.3089L12.7137 15.6178ZM12.5803 12.0492L12.1161 11.8635L12.5803 12.0492ZM12.6087 12.2471L12.2156 12.556L12.6087 12.2471ZM8.41831 10.151L8.81147 9.84208L8.41831 10.151ZM8.09039 10.1703L7.66375 9.90954L8.09039 10.1703ZM15.1918 6.43601L15.6495 6.23464L15.1918 6.43601ZM14.8231 6.44228L15.2873 6.62798L14.8231 6.44228ZM3.18596 18.1957L2.75931 17.935L3.18596 18.1957ZM20.3766 18.2195L19.9189 18.4208L20.3766 18.2195ZM20.1935 19H3.35661V18H20.1935V19ZM15.6495 6.23464L20.8342 18.0181L19.9189 18.4208L14.7342 6.63738L15.6495 6.23464ZM12.1161 11.8635L14.3588 6.25659L15.2873 6.62798L13.0445 12.2349L12.1161 11.8635ZM13.0019 11.9382L14.6795 14.0733L13.8932 14.6911L12.2156 12.556L13.0019 11.9382ZM14.6795 14.0733C15.1913 14.7247 15.0781 15.6677 14.4267 16.1795L13.8089 15.3932C14.026 15.2226 14.0638 14.9082 13.8932 14.6911L14.6795 14.0733ZM14.4267 16.1795C13.7753 16.6913 12.8323 16.5781 12.3205 15.9267L13.1068 15.3089C13.2774 15.526 13.5918 15.5638 13.8089 15.3932L14.4267 16.1795ZM12.3205 15.9267L8.02516 10.4599L8.81147 9.84208L13.1068 15.3089L12.3205 15.9267ZM2.75931 17.935L7.66375 9.90954L8.51704 10.431L3.6126 18.4564L2.75931 17.935ZM13.0445 12.2349C13.0843 12.1355 13.0681 12.0224 13.0019 11.9382L12.2156 12.556C12.0612 12.3595 12.0233 12.0956 12.1161 11.8635L13.0445 12.2349ZM8.02516 10.4599C8.15437 10.6244 8.40798 10.6094 8.51704 10.431L7.66375 9.90954C7.91822 9.49313 8.50997 9.45835 8.81147 9.84208L8.02516 10.4599ZM14.7342 6.63738C14.8413 6.88075 15.1886 6.87485 15.2873 6.62798L14.3588 6.25659C14.5893 5.68056 15.3996 5.66679 15.6495 6.23464L14.7342 6.63738ZM3.35661 19C2.80996 19 2.47426 18.4014 2.75931 17.935L3.6126 18.4564C3.73476 18.2565 3.59089 18 3.35661 18V19ZM20.1935 18C19.9769 18 19.8317 18.2225 19.9189 18.4208L20.8342 18.0181C21.0378 18.4807 20.6989 19 20.1935 19V18Z" fill="#fff"/>
            </svg>
          </div>
        </button>
      </div>
    </div>

  )
}

export default MoMs