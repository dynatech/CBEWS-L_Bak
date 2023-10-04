import { signIn } from "next-auth/react";

export const SignupModal = ({
  setShowModal,
  registrationDetails,
  setRegistrationDetails,
  togglePasswordVisibility,
  handleSignup,
  signupViaGoogle,
  showPassword,
}) => {
  const designations = [
    "LEWC",
    "BLGU",
    "MLGU",
    "PLGU",
    "Dynaslope",
    "Community",
  ];

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-4/12 my-6 mx-auto max-w-3x">
        <div
          className="border-0 rounded-lg shadow-lg flex flex-col w-full outline-none bg-white focus:outline-none overflow-y-scroll"
          style={{ height: "85vh" }}
        >
          <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t bg-white">
            <h3 className="p-3 text-3xl font-semibold text-gray-600">
              Register an account
            </h3>
            <button
              className="ml-10 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => {
                setShowModal(false);
                setRegistrationDetails({});
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
                  htmlFor="username"
                >
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your username"
                    value={registrationDetails.username}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstname"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your first name"
                    value={registrationDetails.firstname}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        firstname: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastname"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your last name"
                    value={registrationDetails.lastname}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        lastname: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  htmlFor="middlename"
                >
                  Middle Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="middlename"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your middle name"
                    value={registrationDetails.middlename}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        middlename: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  htmlFor="nickname"
                >
                  Nickname
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="nickname"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your nickname"
                    value={registrationDetails.nickname}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        nickname: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-1 flex justify-between">
                <div className="static" style={{ width: "49%" }}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    htmlFor="birthday"
                  >
                    Birthdate
                  </label>
                  <div>
                    <input
                      type="date"
                      name="birthday"
                      className="shadow appearance-none border w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your birthdate"
                      value={registrationDetails.birthday}
                      onChange={(e) =>
                        setRegistrationDetails({
                          ...registrationDetails,
                          birthday: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="static" style={{ width: "49%" }}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <div>
                    <select
                      type="text"
                      name="gender"
                      className={`shadow appearance-none border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                        registrationDetails.hasOwnProperty("gender")
                          ? "text-gray-700"
                          : "text-gray-500"
                      }`}
                      placeholder="Choose your gender"
                      value={registrationDetails.gender}
                      onChange={(e) =>
                        setRegistrationDetails({
                          ...registrationDetails,
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
              <div className="mb-1 flex justify-between">
                <div className="static" style={{ width: "49%" }}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    htmlFor="mobile_number"
                  >
                    Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="mobile_number"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter your mobile number"
                      value={registrationDetails.mobile_number}
                      onChange={(e) =>
                        setRegistrationDetails({
                          ...registrationDetails,
                          mobile_number: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="static" style={{ width: "49%" }}>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    htmlFor="designation"
                  >
                    Stakeholder Group
                  </label>
                  <div className="relative">
                    <select
                      type="text"
                      name="designation"
                      className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                        registrationDetails.hasOwnProperty("designation")
                          ? "text-gray-700"
                          : "text-gray-500"
                      }`}
                      placeholder="Choose your stakeholder group"
                      value={registrationDetails.designation}
                      onChange={(e) =>
                        setRegistrationDetails({
                          ...registrationDetails,
                          designation: e.target.value,
                        })
                      }
                    >
                      <option disabled selected value>
                        -- select a stakeholder group --
                      </option>
                      {designations.map((desig) => (
                        <option value={desig}>{desig}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your password"
                    value={registrationDetails.password}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        password: e.target.value,
                      })
                    }
                  />
                  <button
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg
                        className="w-6 h-6 text-gray-800 dark:gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 14"
                      >
                        <g
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                        </g>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  htmlFor="c_password"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="c_password"
                    name="c_password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your password"
                    value={registrationDetails.c_password}
                    onChange={(e) =>
                      setRegistrationDetails({
                        ...registrationDetails,
                        c_password: e.target.value,
                      })
                    }
                  />
                  <button
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg
                        className="w-6 h-6 text-gray-800 dark:gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 14"
                      >
                        <g
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                        </g>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="text-gray-600 bg-white rounded-full p-4"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-primary-blue rounded-full pl-4 pr-4 pt-2 pb-2"
                  type="button"
                  onClick={() => handleSignin()}
                >
                  Submit
                </button>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <hr className="flex-grow border-gray-300 border-t-2" />
                <span className="text-gray-500">OR</span>
                <hr className="flex-grow border-gray-300 border-t-2" />
              </div>
              <div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={() => {
                    // signInViaGoogle();
                    signIn("google");
                  }}
                >
                  Signup using Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
