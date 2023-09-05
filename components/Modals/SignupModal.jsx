export const SignupModal = ({ setShowModal, registrationDetails, setRegistrationDetails, togglePasswordVisibility, handleSignup, signupViaGoogle, showPassword }) => {
    return (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="p-6 text-3xl font-semibold text-gray-600">
                            Register an account
                        </h3>
                        <button
                            className="ml-10 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-gray-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <div className='flex text-center w-full flex-col gap-4 p-5'>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="username">
                                    Username / Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type='text'
                                        name="username"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your username / password"
                                        value={registrationDetails.hasOwnProperty('username') ? registrationDetails.username : ""}
                                        onChange={(e) => setRegistrationDetails({ ...registrationDetails, username: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your password"
                                        value={registrationDetails.hasOwnProperty('password') ? registrationDetails.password : ""}
                                        onChange={(e) => setRegistrationDetails({ ...registrationDetails, password: e.target.value })}
                                    />
                                    <button
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ?
                                            <svg className="w-6 h-6 text-gray-800 dark:gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            :
                                            <svg className="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                    <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                    <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                                                </g>
                                            </svg>
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="c_password">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="c_password"
                                        name="c_password"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your password"
                                        value={registrationDetails.hasOwnProperty('c_password') ? registrationDetails.c_password : ""}
                                        onChange={(e) => setRegistrationDetails({ ...registrationDetails, c_password: e.target.value })}
                                    />
                                    <button
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ?
                                            <svg className="w-6 h-6 text-gray-800 dark:gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            :
                                            <svg className="w-6 h-6 text-gray-800 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                    <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                    <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                                                </g>
                                            </svg>
                                        }
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
                                        signInViaGoogle();
                                    }}
                                >Signup using Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
