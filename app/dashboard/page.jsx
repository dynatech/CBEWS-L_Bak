'use client'

import React, { useState, useEffect } from 'react'
import AlertBanner from '@components/AlertBanner'

const Dashboard = () => {
  const [alertLevel, setAlertLevel] = useState(0);
  // for testing purposes only
  const ALERT_RESPONSES = [
    {'lgu': 'plgu', 'response': 'N/A'},
    {'lgu': 'mlgu', 'response': 'N/A'},
    {'lgu': 'blgu', 'response': 'N/A'},
    {'lgu': 'lewc', 'response': 'Magpatuloy sa pang-araw-araw na gawain. Suportahan ang LEWC sa pagmo-monitor'},
    {'lgu': 'community', 'response': 'Magpatuloy sa pang-araw-araw na gawain'},
  ]
  const generateRandomAlert = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  useEffect(()=> {
    setAlertLevel(parseInt(generateRandomAlert(0,3)));
  }, []);

  return (
    <div>
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
    </div>
  )
}

export default Dashboard