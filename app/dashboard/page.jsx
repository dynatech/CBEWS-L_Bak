'use client'

import React, { useState, useEffect } from 'react';
import AlertBanner from '@components/AlertBanner';
import { PendingAlertCard, EventAlertCard } from '@components/Containers';

const Dashboard = () => {
  const [alertLevel, setAlertLevel] = useState(0);
  // for testing purposes only
  const ALERT_RESPONSES = [
    { 'lgu': 'plgu', 'response': 'N/A' },
    { 'lgu': 'mlgu', 'response': 'N/A' },
    { 'lgu': 'blgu', 'response': 'N/A' },
    { 'lgu': 'lewc', 'response': 'Magpatuloy sa pang-araw-araw na gawain. Suportahan ang LEWC sa pagmo-monitor' },
    { 'lgu': 'community', 'response': 'Magpatuloy sa pang-araw-araw na gawain' },
  ]
  const generateRandomAlert = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  useEffect(() => {
    setAlertLevel(parseInt(generateRandomAlert(0, 3)));
  }, []);

  return (
    <div className="w-full h-full pb-20">
      <div className="text-center pt-5">
        <h4 className="font-bold text-primary-blue-100 text-4xl">
          Current alert status
        </h4>
        <h5 className="text-primary-blue-100 text-xl">
          As of {`<TIMESTAMP>`}
        </h5>
      </div>
      <AlertBanner alertLevel={alertLevel} />
      <div>
        {
          ALERT_RESPONSES.map((row, index) => (
            <h1 key={index} className="text-center text-primary-blue text-xl font-bold pb-2">
              Reponse ({row.lgu.toUpperCase()}): {row.response}
            </h1>
          ))
        }
      </div>
      <hr className="my-4 mx-16 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
      <div className="mx-16">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-primary-blue-100 text-4xl py-4">
            Pending Alert Validation
          </h4>
          <div className="flex align-center justify-center">
            <button type="button" className="text-white bg-primary-blue rounded-md p-2 flex-center">
              <span className="pr-1">Release On-demand</span>
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="m19.848 15.968-4.4-7a1 1 0 0 0-1.6-.131l-2.164 2.448L7.872 4.51A1.028 1.028 0 0 0 6.985 4a1 1 0 0 0-.871.537l-6 11.5A1 1 0 0 0 1 17.5h18a1 1 0 0 0 .847-1.532ZM12.5 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </button>
          </div>
        </div>
        <PendingAlertCard />
      </div>
      <hr className="my-4 mx-16 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
      <div className="mx-16">
        <h4 className="font-bold text-primary-blue-100 text-4xl py-4">
          Event Monitoring
        </h4>
        <EventAlertCard />
      </div>
    </div>
  )
}

export default Dashboard