'use client';

import Tables from '@components/Tables';
import { Card } from 'flowbite-react';

const HouseholdData = () => {
  const TABLE_HEADERS = [
    "Household #",
    "Household Head",
    "Member Count",
    "Actions"
  ];

  const TABLE_CONTENT = [
    {
      household_id: '1',
      household_head: 'Dingdong done test',
      member_count: 2,
      actions: 'N/A'
    },
    {
      household_id: '2',
      household_head: 'Marian Hilera',
      member_count: 2,
      actions: 'N/A'
    },
    {
      household_id: '3',
      household_head: 'Cardo Daliri',
      member_count: 4,
      actions: 'N/A'
    }
  ]

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

  return (
    <div className="w-full pb-20">
      <div className="text-center pt-5">
        <div className="container mx-auto px-10">
          <div>
            <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
              Household Data
            </h4>
            <Tables
              headers={TABLE_HEADERS}
              content={TABLE_CONTENT}
              actions={() => { }} />
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
                VULNERABLE_CATEGORY.map((x, index) => (
                  <Card
                    className="max-w-sm"
                    key={index}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {x.label}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        No. of {x.label}: 0
                    </p>
                    <div className="py-5">
                      <button type="button" className="text-white bg-primary-blue rounded-md p-2">
                        <div className="flex justify-center items-center">
                          <span className="pr-2">View details</span>
                          <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </Card>
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