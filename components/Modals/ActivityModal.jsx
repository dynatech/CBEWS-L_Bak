
import React, { useState, useEffect } from "react";
import { getEvent, addEvent } from '@apis/ActivityManagement';

const ActivityModal = (props) => {
  const {
    setActivities,
    action,
    setOpenPrompt,
    setPromptTitle,
    setNotifMessage,
    setErrorPrompt,
    setConfirmation,
    onClose,
    indexToEdit,
    nameToEdit,
    placeToEdit,
    detailsToEdit,
    startToEdit,
    endToEdit,
  } = props;

  const [formData, setFormData] = useState({
    activity_id: action === 'edit' ? indexToEdit : 0,
    activity_name: action === 'edit' ? nameToEdit : '',
    activity_place: action === 'edit' ? placeToEdit : '',
    activity_note: action === 'edit' ? detailsToEdit : '',
    start: action === 'edit' ? startToEdit : '',
    end: action === 'edit' ? endToEdit : '',
  });

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const handleSubmit = () => {
    if (action == "add") {
      addEvent(formData, (response) => {
        if (response.status) {
          setOpenPrompt(true);
          setErrorPrompt(false);
          setPromptTitle("Success");
          setNotifMessage(response.feedback);
          props.fetchUpdatedData();
          setFormData({
        activity_name: '',
          activity_place: '',
               activity_note: '',
               startDate: '',
                endDate: '',
               });
            handleClose();
           } else {
             setOpenPrompt(true);
             setErrorPrompt(true);
             setPromptTitle("Failed to add activity");
              setNotifMessage(response.feedback);
             setConfirmation(null);
            }
         });
    } else if (action == "edit") {
      addEvent(formData, (response) => {
        if (response.status) {
          setOpenPrompt(true);
          setErrorPrompt(false);
          setPromptTitle("Success");
          setNotifMessage(response.feedback);
          props.fetchUpdatedData();
          setFormData({
            activity_name: "",
            activity_place: "",
            activity_note: "",
            start: "",
            end: "",
          });       
          handleClose();
           } else {
             setOpenPrompt(true);
             setErrorPrompt(true);
             setPromptTitle("Failed to edit activity");
              setNotifMessage(response.feedback);
             setConfirmation(null);
            }
         });
    }
  };

  useEffect(() => {
    getEvent({}, (response) => {
      setActivities(response);
    });
  }, []);

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    <div className="relative w-5/12 my-6 mx-auto max-w-3x">
        <div
          className="border-0 rounded-lg shadow-lg flex flex-col w-full outline-none bg-white focus:outline-none overflow-y-scroll"
          style={{ maxHeight: "85vh" }}
        >
        <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t bg-white">
          <h3 className="p-3 text-3xl font-semibold text-gray-600">
          {action == "add" ? "Add" : "Edit"} Activity
          </h3>
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
          <div className="flex text-center w-full flex-col gap-4 p-5">
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-1 text-left"
                htmlFor="activity_name"
              >
                Activity Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="activity_name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter activity name"                  
                  value={formData.activity_name}
                  onChange={(e) =>
                  setFormData({ ...formData, activity_name: e.target.value })}
                 required
                />
              </div>
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-1 text-left"
                htmlFor="activity_place"
              >
                Activity Place
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="activity_place"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter activity place"
                  value={formData.activity_place}
                  onChange={(e) =>
                  setFormData({ ...formData, activity_place: e.target.value })}
                 required
                />
              </div>
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-1 text-left"
                htmlFor="activity_note"
              >
                Activity Details
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="activity_note"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter activity place"
                  value={formData.activity_note}
                  onChange={(e) =>
                  setFormData({ ...formData, activity_note: e.target.value })}
                 required
                />
              </div>
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-1 text-left"
                htmlFor="startDate"
              >
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="startDate"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter start date of activity"
                  value={formData.start}
                  onChange={(e) =>
                  setFormData({ ...formData, start: e.target.value })}
                 required
                />
              </div>
            </div>

            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-1 text-left"
                htmlFor="endDate"
              >
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="endDate"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter end date of activity"
                  value={formData.end}
                  onChange={(e) =>
                  setFormData({ ...formData, end: e.target.value })}
                 required
                />
              </div>
            </div>
            <div>
              <button
                className="text-gray-600 bg-white rounded-full p-4"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="text-white bg-primary-blue rounded-full pl-4 pr-4 pt-2 pb-2"
                type="button"
                onClick={handleSubmit}>
                {action == "add" ? "Add" : "Update"} Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ActivityModal;
