"use client";

import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { Card } from 'flowbite-react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '@styles/globals.css';
import Table from '@components/Table';
import { getEvent, deleteEvent } from '@apis/ActivityManagement';
import PromptModal from "@components/Modals/PromptModal";
import ActivityModal from '@components/Modals/ActivityModal';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [activities, setActivities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [openPrompt, setOpenPrompt] = useState(false);
  const [errorPrompt, setErrorPrompt] = useState(false);
  const [promptTitle, setPromptTitle] = useState("");
  const [notifMessage, setNotifMessage] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [action, setAction] = useState("add");
  const [indexToDelete, setIndexToDelete] = useState(null);
  const [indexToEdit, setIndexToEdit] = useState(null);
  
  useEffect(() => {
    getEvent({}, (response) => {
      setActivities(response);
    });
  }, []);

  const isDateInRange = (activity, selectedDate) => {
    const startDate = new Date(activity.start);
    const endDate = new Date(activity.end);
    return (
      (startDate <= selectedDate && selectedDate <= endDate) ||
      startDate.toDateString() === selectedDate.toDateString()
    );
  };

  const filteredActivities = activities.filter((activity) => {
    return selectedDate && isDateInRange(activity, selectedDate);
  });

  const handleCalendarDateChange = (date) => {
    setCalendarDate(date);
    setSelectedDate(date);
  };

  const handleAddActivity = () => {
    setAction("add");
    setShowForm(!showForm);
  };

  const fetchUpdatedData = () => {
    getEvent({}, (updatedResponse) => {
      setActivities(updatedResponse);
    });
  };

  const handleUpdate = (index) => {
    if (index) {
    setShowForm(true);
    setAction("edit");
    setIndexToEdit(index.id);
  } else {
    console.log("handleupdate error");
  }
  };

  const columns = [
    { name: "title", label: "Activity name" },
    { name: "place", label: "Activity place" },
    { name: "note", label: "Activity details" },
    { name: "start", label: "Start date" },
    { name: "end", label: "End date" },
  ];

  const confirmDelete = (response) => {
    console.log("delete response", response);
    setAction("delete");
    setOpenPrompt(true);
    setErrorPrompt(false);
    setPromptTitle("Are you sure you want to delete this activity?");
    setNotifMessage("This activity will be deleted immediately.");
    setConfirmation(true);
    setIndexToDelete(response);
  };

  const handleDeleteActivity = (index) => {
    
    deleteEvent({ activity_id: indexToDelete.id }, (response) => {
      console.log(response);
      if (response.status) {
        setOpenPrompt(true);
        setErrorPrompt(false);
        setPromptTitle("Success");
        setNotifMessage(response.feedback);
        setConfirmation(false);
        setIndexToDelete(null);
        fetchUpdatedData();

      } else {
        setOpenPrompt(true);
        setErrorPrompt(true);
        setPromptTitle("Failed to delete");
        setNotifMessage(response.feedback);
        setConfirmation(false);
        setIndexToDelete(null);
        fetchUpdatedData();
      }
    });
    console.log("HANDLE DELETE");
  };


  return (
    <div className="w-full pb-20">
      <div className="container mx-auto px-10 flex" style={{ marginTop: '50px' }}>
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
                    <p className="font-normal text-gray-700 dark:text-gray-400">{activity.note}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Start Date: {activity.start}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">End Date: {activity.end}</p>
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
          {showForm ? (
          <>
            <ActivityModal
              activities={activities}
              setActivities={setActivities}
              action={action}
              setOpenPrompt={setOpenPrompt}
              setPromptTitle={setPromptTitle}
              setNotifMessage={setNotifMessage}
              setErrorPrompt={setErrorPrompt}
              setConfirmation={setConfirmation}
              onClose={() => setShowForm(false)}
              fetchUpdatedData={fetchUpdatedData}
              indexToEdit={indexToEdit}
            />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
          ) : null}
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
          <Table
              data={{
                columns: columns,
                rows: activities,
              }}
              onEdit={handleUpdate}
              onDelete={confirmDelete}
              numberOfItemsPerPage={15}
          />
        </div>
      </div>
      <PromptModal
        isOpen={openPrompt}
        error={errorPrompt}
        title={promptTitle}
        setOpenModal={setOpenPrompt}
        notifMessage={notifMessage}
        confirmation={confirmation}
        callback={(response) => {
          if (response == true) {
            if (action == "delete") {
              handleDeleteActivity();
            }
          } else if (response == false) {
            setIndexToDelete(null);
          }
        }}
      />
    </div>
  );
};

export default Calendar;