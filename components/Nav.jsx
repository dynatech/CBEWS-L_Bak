'use client'
import AVATAR from '@public/icons/ProfileIcon.png';

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import NavBarLogos from './NavBarLogos';

import {Flowbite} from 'flowbite-react';
import withDarkMode from '@utils/withDarkMode';

const Nav = () => {
    const FlowbiteWithDarkMode = withDarkMode(Flowbite);

    const router = useRouter();
    const { data: session } = useSession();
    const [isSettingsOpen, setSettingOpen] = useState(false);
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleSetting = () => {
        setSettingOpen((prev) => !prev);
        setNotificationOpen(false);
    }

    const toggleNotification = () => {
        setNotificationOpen((prev) => !prev);
        setSettingOpen(false);
    }

    const handleSignout = async () => {
        signOut();
    }

    useEffect(() => {
        if (!session?.user) {
            router.push('/');
        }
    }, [session]);

    return (
        session?.user ?
            <FlowbiteWithDarkMode>
                <nav className='flex-between w-full pt-3 bg-transparent px-10 py-5'>
                    <div className='flex gap-3 items-center'>
                        <NavBarLogos />
                        <div>
                            <h1 className="nav_head_text text-left">
                                <span className="blue_gradient text-left">Community Based Early Warning System for Landslides</span>
                            </h1>
                            <h1 className="nav_subhead_text text-left text-primary-blue">
                                Brgy. Poblacion, Bakun, Benguet
                            </h1>
                        </div>
                    </div>
                    <div className='sm:flex hidden gap-4'>
                        <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button" onClick={() => { toggleNotification(); }}>
                            <svg className="w-5 h-5 fill-primary-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20">
                                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                            </svg>
                            <div className="relative flex">
                                <div className="relative inline-flex w-3 h-3 bg-primary-orange border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900" />
                            </div>
                        </button>
                        <div id="dropdownNotification" ref={dropdownRef} className={`z-20 ${!isNotificationOpen && `hidden`} w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700 absolute right-24 top-20`} aria-labelledby="dropdownNotificationButton">
                            <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                                Notifications
                            </div>
                            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div className="flex-shrink-0">
                                        <Image className="rounded-full w-11 h-11" src={AVATAR} alt="Jese image" />
                                        <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                            <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                                <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-full pl-3">
                                        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Kap! Maulan po dito samin ngayon."</div>
                                        <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                                    </div>
                                </a>
                            </div>
                            <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                <div className="inline-flex items-center ">
                                    <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                    </svg>
                                    View all
                                </div>
                            </a>
                        </div>
                        <div className="flex items-center" id="dropDownSettingsDiv" data-dropdown-toggle="dropDownSettings">
                            <button type="button" onClick={() => { toggleSetting(); }}>
                                <Image
                                    src={AVATAR}
                                    alt="Avatar"
                                    className="rounded-full w-10 h-10 mr-2"
                                />
                            </button>
                            <div id="dropDownSettings" ref={dropdownRef} className={`z-20 ${!isSettingsOpen && `hidden`} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-10 top-20`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bug report</a>
                                    </li>
                                </ul>
                                <div className="py-2">
                                    <button type="button" className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={handleSignout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </FlowbiteWithDarkMode>
            :
            <></>
    )
}

export default Nav