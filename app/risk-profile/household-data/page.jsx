'use client';

import Table from '@components/Table';
import Card from '@components/Card';

const HouseholdData = () => {

  const DummyData = {
    headers: ["Household #",
    "Household Head",
    "Member Count"],
    data: [{
      household_id: '1',
      household_head: 'Dingdong done test',
      member_count: 2,
    },
    {
      household_id: '1',
      household_head: 'Dingdong done test',
      member_count: 2,
    },
    {
      household_id: '1',
      household_head: 'Dingdong done test',
      member_count: 2,
    },]
  }

  const VULNERABLE_CATEGORY = [
    {
      key: "pregnant",
      label: "Pregnant"
    },
    {
      key: "person_with_disability",
      label: "Person with disability"
    },
    {
      key: "person_with_comorbidity",
      label: "Person with disability"
    },
    {
      key: "senior_citizen",
      label: "Senior Citizens"
    },
    {
      key: "children_6_12",
      label: "Children (Ages 6 to 12)"
    },
    {
      key: "children_0_5",
      label: "Children (Ages 0 to 5)"
    }
  ];

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
              Household Data
            </h4>
            <Table content={DummyData} actions={handleActions}/>
            <div className="py-5">
              <button type="button" className="text-white bg-primary-blue rounded-md p-2">
                <div className="flex justify-center items-center">
                  <span className="pr-2">Add Household</span>
                  <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <hr className="my-4 mx-16 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
          <div>
            <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
              Vulnerable household
            </h4>
            <div className='grid grid-cols-4 gap-4'>
              {
                VULNERABLE_CATEGORY.map((x) => (
                  <Card type="normal" header={x.label} content={`Number of ${x.label}: ${0}`}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseholdData