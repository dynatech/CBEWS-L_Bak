import Table from "@components/Table";

const VulnerableHouseholdModal = (props) => {
  const {
    vulnerableGroup,
    vulnerableHouseholds,
    setShowVulnerableModal,
    setVulnerableHouseholds,

    setHouseholdHead,
    setHouseholdMembers,
    setAction,
    setShowModal,
  } = props;

  const columns = [
    { name: "household_id", label: "Household #" },
    { name: "household_head", label: "Household Head" },
    { name: "count", label: "Member Count" },
  ];

  const handleView = (x) => {
    setHouseholdHead(x);
    setHouseholdMembers(x.members);
    setShowModal(true);
    setAction("view");
  };

  const handleClose = () => {
    setShowVulnerableModal(false);
    setVulnerableHouseholds([]);
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none bg-black bg-opacity-25">
      <div className="relative w-9/12 my-6 mx-auto max-w-3x">
        <div className="border-0 rounded-lg shadow-lg flex flex-col w-full outline-none bg-white focus:outline-none overflow-y-scroll">
          <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t bg-white">
            <div className="text-left">
              <h3 className=" px-3 text-3xl font-semibold text-gray-600">
                {vulnerableGroup}
              </h3>
              <h3 className="px-3 text-xl font-semibold text-gray-600">
                Household/s with vulnerable members
              </h3>
            </div>
            <button
              className="ml-10 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => {
                handleClose();
              }}
            >
              <span className="bg-transparent text-gray-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>

          <div className="relative p-3 flex-auto">
            <Table
              data={{
                columns: columns,
                rows: vulnerableHouseholds,
              }}
              onView={handleView}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VulnerableHouseholdModal;
