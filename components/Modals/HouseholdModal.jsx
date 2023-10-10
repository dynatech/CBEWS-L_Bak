import { addHousehold, editHousehold } from "@apis/CapacityAndVulnerability";
import { useState } from "react";
import PromptModal from "./PromptModal";

const HouseholdModal = (props) => {
  const {
    setShowModal,
    householdHead,
    setHouseholdHead,
    householdMembers,
    setHouseholdMembers,
    action,
    fetchAll,

    setOpenPrompt,
    setPromptTitle,
    setNotifMessage,
    setErrorPrompt,
    setConfirmation,
  } = props;

  const handleClose = () => {
    setShowModal(false);
    setHouseholdHead({});
    setHouseholdMembers([]);
  };

  const handleAddMember = () => {
    setHouseholdMembers([...householdMembers, {}]);
  };

  const handleDeleteMember = (index) => {
    let temp = [...householdMembers];
    temp.splice(index, 1);
    setHouseholdMembers(temp);
  };

  const validInputHead = () => {
    if (
      householdHead.hasOwnProperty("household_id") &&
      householdHead.household_id != "" &&
      householdHead.hasOwnProperty("household_head") &&
      householdHead.household_head != "" &&
      householdHead.hasOwnProperty("birthdate") &&
      householdHead.birthdate != "" &&
      householdHead.hasOwnProperty("gender") &&
      householdHead.gender != ""
    ) {
      return true;
    } else return false;
  };

  const handleSubmit = () => {
    let complete = validInputHead();

    if (complete) {
      let tempMembers = [];

      householdMembers.map((member) => {
        tempMembers.push({
          ...member,
          pregnant: member.hasOwnProperty("pregnant") ? member.pregnant : false,
          disability: member.disabled
            ? member.disability == "" || member.disability == null
              ? "not specified"
              : member.disability
            : null,
          comorbidity: member.comorbid
            ? member.comorbidity == "" || member.comorbidity == null
              ? "not specified"
              : member.comorbidity
            : null,
        });
      });

      let submitData = {
        ...householdHead,
        pregnant: householdHead.hasOwnProperty("pregnant")
          ? householdHead.pregnant
          : false,
        disability: householdHead.disabled
          ? householdHead.disability == "" || householdHead.disability == null
            ? "not specified"
            : householdHead.disability
          : null,
        comorbidity: householdHead.comorbid
          ? householdHead.comorbidity == "" || householdHead.comorbidity == null
            ? "not specified"
            : householdHead.comorbidity
          : null,
        members: tempMembers,
      };

      console.log("submit data", submitData);

      if (action == "add") {
        addHousehold(submitData, (response) => {
          if (response.status) {
            console.log(response);

            fetchAll();
            handleClose();
            setOpenPrompt(true);
            setErrorPrompt(false);
            setPromptTitle("Success");
            setNotifMessage(response.message);
            setConfirmation(false);
          } else {
            setOpenPrompt(true);
            setErrorPrompt(true);
            setPromptTitle("Fail");
            setNotifMessage(response.message);
            setConfirmation(false);
          }
        });
      } else if (action == "edit") {
        editHousehold(submitData, (response) => {
          if (response.status) {
            console.log("edit", response);
            fetchAll();
            handleClose();
            setOpenPrompt(true);
            setErrorPrompt(false);
            setPromptTitle("Success");
            setNotifMessage(response.message);
            setConfirmation(false);
          } else {
            setOpenPrompt(true);
            setErrorPrompt(true);
            setPromptTitle("Fail");
            setNotifMessage(response.message);
            setConfirmation(false);
          }
        });
      }
    } else {
      setValid(false);
    }
  };

  const [valid, setValid] = useState(true);

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-5/12 my-6 mx-auto max-w-3x">
        <div
          className="border-0 rounded-lg shadow-lg flex flex-col w-full outline-none bg-white focus:outline-none overflow-y-scroll"
          style={{ maxHeight: "85vh" }}
        >
          <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t bg-white">
            <h3 className="p-3 text-3xl font-semibold text-gray-600">
              {action == "add" ? "Add" : "Edit"} Household
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
              {!valid && (
                <p className="text-red-500">**Please input complete details</p>
              )}
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  htmlFor="hh_id"
                >
                  Household Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="hh_id"
                    className={`shadow appearance-none border ${
                      !valid
                        ? householdHead.hasOwnProperty("household_id")
                          ? householdHead.household_id == ""
                            ? `border-red-500`
                            : ``
                          : `border-red-500`
                        : ``
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    placeholder="Enter household ID"
                    value={householdHead.household_id}
                    onChange={(e) => {
                      setHouseholdHead({
                        ...householdHead,
                        household_id: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  htmlFor="hh_head"
                >
                  Household Head Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="hh_head"
                    className={`shadow appearance-none border ${
                      !valid
                        ? householdHead.hasOwnProperty("household_head")
                          ? householdHead.household_head == ""
                            ? `border-red-500`
                            : ``
                          : `border-red-500`
                        : ``
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    placeholder="Ex: Juan Dela Cruz"
                    value={householdHead.household_head}
                    onChange={(e) => {
                      setHouseholdHead({
                        ...householdHead,
                        household_head: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="mb-1 flex justify-between">
                <div className="static" style={{ width: "49%" }}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    htmlFor="hh_birthday"
                  >
                    Birthdate
                  </label>
                  <div>
                    <input
                      type="date"
                      name="hh_birthday"
                      className={`shadow appearance-none border ${
                        !valid
                          ? householdHead.hasOwnProperty("birthdate")
                            ? householdHead.birthdate == ""
                              ? `border-red-500`
                              : ``
                            : `border-red-500`
                          : ``
                      } w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                        householdHead.hasOwnProperty("birthdate")
                          ? "text-gray-700"
                          : "text-gray-500"
                      }`}
                      //   placeholder=""
                      value={householdHead.birthdate}
                      onChange={(e) =>
                        setHouseholdHead({
                          ...householdHead,
                          birthdate: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="static" style={{ width: "49%" }}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    htmlFor="hh_gender"
                  >
                    Gender
                  </label>
                  <div>
                    <select
                      type="text"
                      name="hh_gender"
                      className={`shadow appearance-none border ${
                        !valid
                          ? householdHead.hasOwnProperty("gender")
                            ? householdHead.gender == ""
                              ? `border-red-500`
                              : ``
                            : `border-red-500`
                          : ``
                      } w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                        householdHead.hasOwnProperty("gender")
                          ? "text-gray-700"
                          : "text-gray-500"
                      }`}
                      placeholder="Choose your gender"
                      value={householdHead.gender}
                      onChange={(e) =>
                        setHouseholdHead({
                          ...householdHead,
                          gender: e.target.value,
                        })
                      }
                    >
                      <option disabled selected value>
                        -- select your gender --
                      </option>
                      <option value="F">Female</option>
                      <option value="M">Male</option>
                    </select>
                  </div>
                </div>
              </div>
              {householdHead.hasOwnProperty("gender") &&
                householdHead.gender == "F" && (
                  <div className="mb-1 flex items-center">
                    <input
                      type="checkbox"
                      name="hh_pregnant"
                      className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      // placeholder="Ex: Juan Dela Cruz"
                      checked={householdHead.pregnant}
                      onChange={(e) => {
                        setHouseholdHead({
                          ...householdHead,
                          pregnant: e.target.checked,
                        });
                      }}
                    />
                    <label
                      className="block text-gray-700 text-sm font-bold text-left ml-2"
                      htmlFor="hh_pregnant"
                    >
                      Pregnant
                    </label>
                  </div>
                )}
              <div className="mb-1 flex items-center">
                <input
                  type="checkbox"
                  name="hh_disabled"
                  className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Ex: Juan Dela Cruz"
                  checked={householdHead.disabled}
                  onChange={(e) => {
                    setHouseholdHead({
                      ...householdHead,
                      disabled: e.target.checked,
                    });
                  }}
                />
                <label
                  className="block text-gray-700 text-sm font-bold text-left ml-2"
                  htmlFor="hh_disabled"
                >
                  Person with disability
                </label>
              </div>
              {householdHead.hasOwnProperty("disabled") &&
                householdHead.disabled && (
                  <div className="mb-1">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-1 text-left"
                      htmlFor="hh_disability"
                    >
                      Disability
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="hh_disability"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Prefer not to say"
                        value={householdHead.disability}
                        onChange={(e) => {
                          setHouseholdHead({
                            ...householdHead,
                            disability: e.target.value,
                          });
                        }}
                      />
                      <p class="mt-1 text-xs text-left text-gray-700">
                        Specify disability
                      </p>
                    </div>
                  </div>
                )}
              <div className="mb-1 flex items-center">
                <input
                  type="checkbox"
                  name="hh_comorbid"
                  className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  // placeholder="Ex: Juan Dela Cruz"
                  checked={householdHead.comorbid}
                  onChange={(e) => {
                    setHouseholdHead({
                      ...householdHead,
                      comorbid: e.target.checked,
                    });
                  }}
                />
                <label
                  className="block text-gray-700 text-sm font-bold text-left ml-2"
                  htmlFor="hh_comorbid"
                >
                  Person with comorbidity
                </label>
              </div>
              {householdHead.hasOwnProperty("comorbid") &&
                householdHead.comorbid && (
                  <div className="mb-1">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-1 text-left"
                      htmlFor="hh_comorbidity"
                    >
                      Comorbidity
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="hh_comorbidity"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Prefer not to say"
                        value={householdHead.comorbidity}
                        onChange={(e) => {
                          setHouseholdHead({
                            ...householdHead,
                            comorbidity: e.target.value,
                          });
                        }}
                      />
                      <p class="mt-1 text-xs text-left text-gray-700">
                        Specify comorbidity
                      </p>
                    </div>
                  </div>
                )}

              {householdMembers.length > 0 &&
                householdMembers.map((member, index) => (
                  <div className="mb-1 border-solid border-2 border-slate-200 p-2">
                    <div className="mb-4">
                      <button
                        className="ml-10 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => {
                          handleDeleteMember(index);
                        }}
                      >
                        <span className="bg-transparent text-gray-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                      {/* <button
                        className="text-white bg-red-500 rounded-full pl-4 pr-4 pt-2 pb-2 "
                        type="button"
                        onClick={() => {
                          // handleDeleteMember(index)
                          let temp = [...householdMembers];
                          temp.splice(index, 1);
                          setHouseholdMembers(temp);
                        }}
                      >
                        Delete Member
                      </button> */}
                    </div>
                    <p className="block text-gray-700 text-md font-bold mb-2 text-left">
                      House Member # {index + 1}
                    </p>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-1 text-left">
                        Member Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Ex: Juan Dela Cruz"
                          value={
                            householdMembers[index].hasOwnProperty(
                              "household_member"
                            )
                              ? householdMembers[index].household_member
                              : ""
                          }
                          onChange={(e) => {
                            let temp = [...householdMembers];
                            temp[index].household_member = e.target.value;
                            setHouseholdMembers(temp);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mb-4 flex justify-between">
                      <div className="static" style={{ width: "49%" }}>
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left">
                          Birthdate
                        </label>
                        <div>
                          <input
                            type="date"
                            className={`shadow appearance-none border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                              householdMembers[index].hasOwnProperty(
                                "birthdate"
                              )
                                ? "text-gray-700"
                                : "text-gray-500"
                            }`}
                            //   placeholder=""
                            value={
                              householdMembers[index].hasOwnProperty(
                                "birthdate"
                              )
                                ? householdMembers[index].birthdate
                                : ""
                            }
                            onChange={(e) => {
                              let temp = [...householdMembers];
                              temp[index].birthdate = e.target.value;
                              setHouseholdMembers(temp);
                            }}
                          />
                        </div>
                      </div>
                      <div className="static" style={{ width: "49%" }}>
                        <label className="block text-gray-700 text-sm font-bold mb-1 text-left">
                          Gender
                        </label>
                        <div>
                          <select
                            type="text"
                            className={`shadow appearance-none border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                              householdMembers[index].hasOwnProperty("gender")
                                ? "text-gray-700"
                                : "text-gray-500"
                            }`}
                            placeholder="Choose your gender"
                            value={
                              householdMembers[index].hasOwnProperty("gender")
                                ? householdMembers[index].gender
                                : ""
                            }
                            onChange={(e) => {
                              let temp = [...householdMembers];
                              temp[index].gender = e.target.value;
                              setHouseholdMembers(temp);
                            }}
                          >
                            <option disabled selected value="">
                              -- select your gender --
                            </option>
                            <option value="F">Female</option>
                            <option value="M">Male</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {householdMembers[index].hasOwnProperty("gender") &&
                      householdMembers[index].gender == "F" && (
                        <div className="mb-4 flex items-center">
                          <input
                            type="checkbox"
                            className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            // placeholder="Ex: Juan Dela Cruz"
                            checked={
                              householdMembers[index].hasOwnProperty("pregnant")
                                ? householdMembers[index].pregnant
                                : false
                            }
                            onChange={(e) => {
                              let temp = [...householdMembers];
                              temp[index].pregnant = e.target.checked;
                              setHouseholdMembers(temp);
                            }}
                          />
                          <label className="block text-gray-700 text-sm font-bold text-left ml-2">
                            Pregnant
                          </label>
                        </div>
                      )}

                    <div className="mb-4 flex items-center">
                      <input
                        type="checkbox"
                        className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        // placeholder="Ex: Juan Dela Cruz"
                        checked={
                          householdMembers[index].hasOwnProperty("disabled")
                            ? householdMembers[index].disabled
                            : false
                        }
                        onChange={(e) => {
                          let temp = [...householdMembers];
                          temp[index].disabled = e.target.checked;
                          setHouseholdMembers(temp);
                        }}
                      />
                      <label className="block text-gray-700 text-sm font-bold text-left ml-2">
                        Person with disability
                      </label>
                    </div>
                    {householdMembers[index].hasOwnProperty("disabled") &&
                      householdMembers[index].disabled && (
                        <div className="mb-1">
                          <label className="block text-gray-700 text-sm font-bold mb-1 text-left">
                            Disability
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              placeholder="Prefer not to say"
                              value={
                                householdMembers[index].hasOwnProperty(
                                  "disability"
                                )
                                  ? householdMembers[index].disability
                                  : ""
                              }
                              onChange={(e) => {
                                let temp = [...householdMembers];
                                temp[index].disability = e.target.value;
                                setHouseholdMembers(temp);
                              }}
                            />
                            <p class="mt-1 text-xs text-left text-gray-700">
                              Specify disability
                            </p>
                          </div>
                        </div>
                      )}
                    <div className="mb-4 flex items-center">
                      <input
                        type="checkbox"
                        className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        // placeholder="Ex: Juan Dela Cruz"
                        checked={
                          householdMembers[index].hasOwnProperty("comorbid")
                            ? householdMembers[index].comorbid
                            : false
                        }
                        onChange={(e) => {
                          let temp = [...householdMembers];
                          temp[index].comorbid = e.target.checked;
                          setHouseholdMembers(temp);
                        }}
                      />
                      <label className="block text-gray-700 text-sm font-bold text-left ml-2">
                        Person with comorbidity
                      </label>
                    </div>
                    {householdMembers[index].hasOwnProperty("comorbid") &&
                      householdMembers[index].comorbid && (
                        <div className="mb-1">
                          <label className="block text-gray-700 text-sm font-bold mb-1 text-left">
                            Comorbidity
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              placeholder="Prefer not to say"
                              value={
                                householdMembers[index].hasOwnProperty(
                                  "comorbidity"
                                )
                                  ? householdMembers[index].comorbidity
                                  : ""
                              }
                              onChange={(e) => {
                                let temp = [...householdMembers];
                                temp[index].comorbidity = e.target.value;
                                setHouseholdMembers(temp);
                              }}
                            />
                            <p class="mt-1 text-xs text-left text-gray-700">
                              Specify comorbidity
                            </p>
                          </div>
                        </div>
                      )}
                  </div>
                ))}

              <div className="mb-1 flex">
                <button
                  className="text-white bg-primary-blue rounded-full pl-4 pr-4 pt-2 pb-2 "
                  type="button"
                  onClick={() => handleAddMember()}
                >
                  Add Member
                </button>
              </div>
              <div className="mb-1">
                <button
                  className="text-white bg-primary-blue rounded-full pl-4 pr-4 pt-2 pb-2 "
                  type="button"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {action == "add" ? "Add New" : "Update"} Household
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseholdModal;
