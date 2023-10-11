"use client";

import HouseholdModal from "@components/Modals/HouseholdModal";
import Table from "@components/Table";
import VulnerableHousehold from "@components/VulnerableHousehold";
import VulnerableHouseholdModal from "@components/Modals/VulnerableHouseholdModal";
import { useEffect, useState } from "react";
import {
  getAllHouseholds,
  deleteHousehold,
  getSummary,
} from "@apis/CapacityAndVulnerability";
import PromptModal from "@components/Modals/PromptModal";

const HouseholdData = (props) => {
  const [openPrompt, setOpenPrompt] = useState(false);
  const [promptTitle, setPromptTitle] = useState("");
  const [notifMessage, setNotifMessage] = useState("");
  const [errorPrompt, setErrorPrompt] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const [households, setHouseholds] = useState([]);

  const [vulnerables, setVulnerables] = useState([]);
  const [showVulnerableModal, setShowVulnerableModal] = useState(false);
  const [vulnerableGroup, setVulnerableGroup] = useState(null);
  const [vulnerableHouseholds, setVulnerableHouseholds] = useState([]);

  const fetchAll = () => {
    let tempHouseholds = [];

    getAllHouseholds((response) => {
      if (response.status) {
        response.data.map((household) => {
          let tempMembers = [];

          household.members.map((member) => {
            tempMembers.push({
              ...member,
              disabled: member.disability != null ? true : false,
              comorbid: member.comorbidity != null ? true : false,
            });
          });

          tempHouseholds.push({
            ...household,
            count: household.members.length,
            disabled: household.disability != null ? true : false,
            comorbid: household.comorbidity != null ? true : false,
            members: tempMembers,
          });
        });
        setHouseholds(tempHouseholds);
      }
    });

    getSummary((response) => {
      setVulnerables([
        {
          key: "pregnant",
          label: "Pregnant",
          count: response.pregnant_count,
        },
        {
          key: "disabled",
          label: "Person with disability",
          count: response.disability_count,
        },
        {
          key: "comorbid",
          label: "Person with comorbidity",
          count: response.comorbidity_count,
        },
        {
          key: "senior",
          label: "Senior Citizens",
          count: response.seniors_count,
        },
        {
          key: "children",
          label: "Children (Ages 6 to 12)",
          count: response.children_count,
        },
        {
          key: "toddler",
          label: "Children (Ages 0 to 5)",
          count: response.toddler_count,
        },
      ]);
    });
  };

  const columns = [
    { name: "household_id", label: "Household #" },
    { name: "household_head", label: "Household Head" },
    { name: "count", label: "Member Count" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [householdHead, setHouseholdHead] = useState({});
  const [householdMembers, setHouseholdMembers] = useState([]);
  const [action, setAction] = useState("add");

  const handleUpdate = (index) => {
    // let tempHousehold = households.filter((x) => x.id == index.id)[0];
    setHouseholdHead(index);
    setHouseholdMembers(index.members);
    setShowModal(true);
    setAction("edit");
  };

  const [toDelete, setToDelete] = useState(null);

  const confirmDelete = (response) => {
    setAction("delete");
    setOpenPrompt(true);
    setErrorPrompt(false);
    setPromptTitle("Are you sure you want to delete this household?");
    setNotifMessage("This household information will be deleted immediately.");
    setConfirmation(true);
    setToDelete(response.id);
  };

  const handleDelete = (index) => {
    // let submitData = {
    //   id: households[toDelete].id,
    // };

    deleteHousehold({ id: toDelete }, (response) => {
      if (response.status) {
        setOpenPrompt(true);
        setErrorPrompt(false);
        setPromptTitle("Success");
        setNotifMessage(response.message);
        setConfirmation(false);
        fetchAll();
        setToDelete(null);
      } else {
        setOpenPrompt(true);
        setErrorPrompt(true);
        setPromptTitle("Failed to delete");
        setNotifMessage(response.message);
        setConfirmation(false);
        fetchAll();
        setToDelete(null);
      }
    });
  };

  const handleView = () => {
    console.log("HANDLE VIEW");
  };

  const handleActions = () => {
    return {
      handleUpdate,
      handleDelete,
      handleView,
    };
  };

  const handleAddHouseholdBtn = () => {
    setShowModal(true);
    setAction("add");
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="w-full pb-20">
      <div className="text-center pt-5">
        <div className="container mx-auto px-10">
          <div>
            <h4 className="font-bold text-primary-blue-100 text-4xl py-4 text-left">
              Household Data
            </h4>
            <Table
              data={{
                columns: columns,
                rows: households,
              }}
              onEdit={handleUpdate}
              onDelete={confirmDelete}
              numberOfItemsPerPage={15}
            />
            <div className="py-5">
              <button
                type="button"
                className="text-white bg-primary-blue rounded-md p-2"
                onClick={() => handleAddHouseholdBtn()}
              >
                <div className="flex justify-center items-center">
                  <span className="pr-2">Add Household</span>
                  <svg
                    className="w-4 h-4 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <hr className="my-4 mx-16 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
          <VulnerableHousehold
            vulnerables={vulnerables}
            //qq
            setVulnerableHouseholds={setVulnerableHouseholds}
            setVulnerableGroup={setVulnerableGroup}
            setShowVulnerableModal={setShowVulnerableModal}
          />
        </div>
      </div>

      {showModal ? (
        <>
          <HouseholdModal
            setShowModal={setShowModal}
            householdHead={householdHead}
            setHouseholdHead={setHouseholdHead}
            householdMembers={householdMembers}
            setHouseholdMembers={setHouseholdMembers}
            action={action}
            fetchAll={fetchAll}
            //prompts
            setOpenPrompt={setOpenPrompt}
            setPromptTitle={setPromptTitle}
            setNotifMessage={setNotifMessage}
            setErrorPrompt={setErrorPrompt}
            setConfirmation={setConfirmation}
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showVulnerableModal && (
        <VulnerableHouseholdModal
          vulnerableGroup={vulnerableGroup}
          vulnerableHouseholds={vulnerableHouseholds}
          setShowVulnerableModal={setShowVulnerableModal}
          setVulnerableHouseholds={setVulnerableHouseholds}
          //
          setHouseholdHead={setHouseholdHead}
          setHouseholdMembers={setHouseholdMembers}
          setAction={setAction}
          setShowModal={setShowModal}
        />
      )}

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
              handleDelete();
            }
          } else if (response == false) {
            setToDelete(null);
          }
        }}
      />
    </div>
  );
};

export default HouseholdData;
