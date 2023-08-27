'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Menu = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  useEffect(() => {

  }, [activeTab])

  return (
    session?.user ?
        <nav className='flex-between w-full bg-primary-blue'>
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
                <ul className="w-full flex flex-col font-medium p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm  md:border-0 md:bg-primary-blue dark:bg-primary-blue md:dark:bg-primary-blue dark:border-primary-blue gap-10">
                    <li>
                        <button onClick={()=> { handleTabChange(0); router.push('/dashboard'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 ${activeTab === 0 ? `md:dark:text-primary-orange` : `md:dark:text-white`} md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent`} aria-current="page">
                            OpCen
                        </button>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-100 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 md:w-auto dark:text-whitew dark:hover:text-white dark:focus:text-white dark:border-white dark:hover:bg-white md:dark:hover:bg-transparent">
                            Data Analysis
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            {/* <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul> */}
                            {/* <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-primary-orange">Sign out</a>
                            </div> */}
                        </div>
                    </li>
                    <li>
                        <button onClick={() => { handleTabChange(2); router.push('/risk-profile'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 ${activeTab === 2 ? `md:dark:text-primary-orange` : `md:dark:text-white`} md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent`}>
                            Community Risk Assessment
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> { handleTabChange(3); router.push('/ground-data'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 ${activeTab === 3 ? `md:dark:text-primary-orange` : `md:dark:text-white`} md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent`}>
                            Ground Data
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> { handleTabChange(4); router.push('/communications'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 ${activeTab === 4 ? `md:dark:text-primary-orange` : `md:dark:text-white`} md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent`}>
                            Communications
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> { handleTabChange(5); router.push('/reports'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 ${activeTab === 5 ? `md:dark:text-primary-orange` : `md:dark:text-white`} md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent`}>
                            Reports
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> { handleTabChange(6); router.push('/calendar'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 ${activeTab === 6 ? `md:dark:text-primary-orange` : `md:dark:text-white`} md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent`}>
                            Calendar
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    :
    <></>
  )
}

export default Menu