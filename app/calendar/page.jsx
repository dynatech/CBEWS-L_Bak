
"use client";

import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { Card } from 'flowbite-react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '/styles/globals.css';
import Table from '@components/Table';


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    details: '',
    startDate: '',
    endDate: '',
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const initialActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(initialActivities);
  }, []);

  const ActivityData = {
    headers: ["Activity name", "Activity details", "Start date", "End date"],
    data: activities
    
  }

  const addActivity = (newActivity) => {
    const updatedActivities = [...activities, newActivity];
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  };

  const handleCalendarDateChange = (date) => {
    setCalendarDate(date);
    setSelectedDate(date); 
  };

  const isDateInRange = (activity, selectedDate) => {
    const startDate = new Date(activity.startDate);
    const endDate = new Date(activity.endDate);
    return (
      (startDate <= selectedDate && selectedDate <= endDate) ||
      startDate.toDateString() === selectedDate.toDateString()
    );
  };

  const filteredActivities = activities.filter((activity) => {
    return (
      selectedDate &&
      isDateInRange(activity, selectedDate)
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data:', formData);

    addActivity(formData);

    setFormData({
      title: '',
      details: '',
      startDate: '',
      endDate: '',
    });

    setShowForm(false);
  };

  const handleAddActivity = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="w-full pb-20">
      <div className="container mx-auto px-10" style={{ marginTop: '50px' }}>
        <div className="calendar">
          <DateRange
            editableDateInputs={false}
            onChange={(item) => handleCalendarDateChange(item.selection.startDate)}
            moveRangeOnFirstSelection={false}
            ranges={[{ startDate: calendarDate, endDate: calendarDate, key: 'selection' }]}
            className="date"
          />
        </div>
        <hr className="my-4 mx-50 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        <div className="activity-list">
          <h4 className="font-bold text-primary-blue-100 text-2xl py-4 text-left">
            Activity Details
          </h4>

          <Card style={{ width: '300px' }}>
            {selectedDate ? (
              filteredActivities.length > 0 ? (
                filteredActivities.map((activity, index) => (
                  <div key={index}>
                    <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{activity.title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{activity.details}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Start Date: {activity.startDate}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">End Date: {activity.endDate}</p>
                  </div>
                ))
              ) : (
                <div><h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">No activities for {selectedDate.toDateString()} </h5></div>
              )
            ) : (
              <div><h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Selected Date: {selectedDate.toDateString()}</h5></div>
            )}
          </Card>

          <div className="event-form">
            <button
              type="button"
              className="text-white bg-primary-blue rounded-md p-2 flex-center"
              style={{ width: '100%', marginTop: '20px'}}
              onClick={handleAddActivity}
            >
              ADD ACTIVITY
            </button>

            {showForm && (
              <div>
                <div className="modal-content">
                  <span className="close" onClick={handleAddActivity}>
                    &times;
                  </span>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="title">Activity Name:</label>
                      <input
                        type="text"
                        id="title"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="details">Activity Details:</label>
                      <textarea
                        id="details"
                        value={formData.details}
                        onChange={(e) =>
                          setFormData({ ...formData, details: e.target.value })
                        }
                        required
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="startDate">Start Date:</label>
                      <input
                        type="date"
                        id="startDate"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({ ...formData, startDate: e.target.value })
                        }
                        required
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="endDate">End Date:</label>
                      <input
                        type="date"
                        id="endDate"
                        value={formData.endDate}
                        onChange={(e) =>
                          setFormData({ ...formData, endDate: e.target.value })
                        }
                        required
                        style={{ width: '100%' }}
                      />
                    </div>
                    <button type="submit"
                      className="text-white bg-primary-blue rounded-md p-2 flex-center"
                      style={{ width: '100%', marginTop: '10px'}}
                    >
                    SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-10">
          <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
            Summary of Activities
          </h4>
        </div>
        <div style={{ marginBottom: '50px', marginTop: '20px' }} className="mx-16">
          <Table content={ActivityData}/>
        </div>
      </div>
    </div>
  );
};

export default Calendar;