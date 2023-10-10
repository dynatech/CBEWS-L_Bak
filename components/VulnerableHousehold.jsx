import Card from "@components/Card";
import { useState } from "react";
import VulnerableHouseholdModal from "@components/Modals/VulnerableHouseholdModal";

const VulnerableHousehold = (props) => {
  const { data } = props;

  const [showVulnerableModal, setShowVulnerableModal] = useState(false);
  const [vulnerableGroup, setVulnerableGroup] = useState(null);
  const [vulnerableHouseholds, setVulnerableHouseholds] = useState([]);

  const VULNERABLE_CATEGORY = [
    {
      key: "pregnant",
      label: "Pregnant",
    },
    {
      key: "disabled",
      label: "Person with disability",
    },
    {
      key: "comorbid",
      label: "Person with comorbidity",
    },
    {
      key: "senior_citizen",
      label: "Senior Citizens",
    },
    {
      key: "children_6_12",
      label: "Children (Ages 6 to 12)",
    },
    {
      key: "children_0_5",
      label: "Children (Ages 0 to 5)",
    },
  ];

  const handleViewMore = (x) => {
    setVulnerableHouseholds(data);
    setVulnerableGroup(x.label);
    setShowVulnerableModal(true);
  };

  return (
    <div>
      <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
        Vulnerable household
      </h4>
      <div
        className="grid grid-cols-6 gap-4"
        // className="bg-yellow-200 flex-wrap flex gap-3"
        style={{ height: "30vh" }}
      >
        {VULNERABLE_CATEGORY.map((x) => (
          //   <Card
          //     type="normal"
          //     header={x.label}
          //     content={`Number of ${x.label}: ${0}`}
          //   />
          <div class="p-6 min-h-full min-w-min border border-gray-400 rounded-md shadow drop-shadow-2xl dark:bg-gray-200 dark:border-gray-400 bg-gray-200">
            <div className="h-3/4">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-primary-blue">
                  {x.label}
                </h5>
              </a>
              <p class="mb-3 font-normal text-primary-blue dark:text-primary-blue">
                {`Number of ${x.label}: ${0}`}
              </p>
            </div>

            <button
              onClick={() => {
                handleViewMore(x);
              }}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-primary-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {showVulnerableModal && (
        <VulnerableHouseholdModal
          vulnerableGroup={vulnerableGroup}
          vulnerableHouseholds={vulnerableHouseholds}
          setShowVulnerableModal={setShowVulnerableModal}
          setVulnerableHouseholds={setVulnerableHouseholds}
        />
      )}
    </div>
  );
};

export default VulnerableHousehold;
