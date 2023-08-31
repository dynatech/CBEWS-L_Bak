'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { Dropdown } from "flowbite-react";

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
                <ul className="w-full flex flex-col font-medium p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm  md:border-0 md:bg-primary-blue dark:bg-primary-blue md:bg-primary-blue dark:border-primary-blue gap-10">
                    <li>
                        <button onClick={()=> { handleTabChange(0); router.push('/dashboard'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 ${activeTab === 0 ? `md:text-primary-orange` : `md:text-white`} md:hover:text-primary-orange dark:hover:text-primary-orange md:hover:bg-transparent`} aria-current="page">
                            OpCen
                        </button>
                    </li>
                    <li>
                        <Dropdown 
                            className='pt-4 pb-2 dark:bg-primary-blue rounded-t-none'
                            renderTrigger={()=> {
                                return (
                                    <button  className={`flex items-center py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 ${activeTab === 1 ? `md:text-primary-orange` : `md:text-white`} md:hover:text-primary-orange dark:hover:text-primary-orange md:hover:bg-transparent`}>
                                        Data Analysis
                                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                )
                            }}
                            >
                            <Dropdown.Item onClick={() => { handleTabChange(1); router.push('/data-analysis'); }}>
                                Summary
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleTabChange(1); router.push('/data-analysis/rainfall-graph'); }}>
                                Rainfall Graph
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleTabChange(1); router.push('/data-analysis/surficial-graph'); }}>
                                Surficial Graph
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleTabChange(1); router.push('/data-analysis/subsurface-graph'); }}>
                                Subsurface Graph
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleTabChange(1); router.push('/data-analysis/earthquake-data'); }}>
                                Earthquake Data
                            </Dropdown.Item>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown className='pt-4 pb-2 dark:bg-primary-blue rounded-t-none'
                            renderTrigger={()=> {
                                return (
                                    <button className={`flex items-center py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 ${activeTab === 2 ? `md:text-primary-orange` : `md:text-white`} md:hover:text-primary-orange dark:hover:text-primary-orange md:hover:bg-transparent`}>
                                        Community Risk Assessment
                                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                )
                            }}
                            >
                            <Dropdown.Item onClick={() => { handleTabChange(2); router.push('/risk-profile/hazard-map'); }}>
                                Hazard Map
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleTabChange(2); router.push('/risk-profile/household-data'); }}>
                                Household Data
                            </Dropdown.Item>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown className='pt-4 pb-2 dark:bg-primary-blue rounded-t-none'
                            renderTrigger={()=> {
                                return (
                                    <button className={`flex items-center py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 ${activeTab === 3 ? `md:text-primary-orange` : `md:text-white`} md:hover:text-primary-orange dark:hover:text-primary-orange md:hover:bg-transparent`}>
                                        Ground Data
                                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </button>
                                )
                            }}
                            >
                            <Dropdown.Item onClick={() => { handleTabChange(3); router.push('/ground-data/surficial-markers'); }}>
                                Surficial Markers
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleTabChange(3); router.push('/ground-data/manifestation-of-movements'); }}>
                                Manifestation of Movements
                            </Dropdown.Item>
                        </Dropdown>
                    </li>
                    <li>
                        <button onClick={()=> { handleTabChange(4); router.push('/communications'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 ${activeTab === 4 ? `md:text-primary-orange` : `md:text-white`} md:hover:text-primary-orange dark:hover:text-primary-orange md:hover:bg-transparent`}>
                            Communications
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> { handleTabChange(5); router.push('/reports'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 ${activeTab === 5 ? `md:text-primary-orange` : `md:text-white`} md:hover:text-primary-orange dark:hover:text-primary-orange md:hover:bg-transparent`}>
                            Reports
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> { handleTabChange(6); router.push('/calendar'); }} className={`block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 ${activeTab === 6 ? `md:text-primary-orange` : `md:text-white`} md:hover:text-primary-orange dark:hover:text-primary-orange md:hover:bg-transparent`}>
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