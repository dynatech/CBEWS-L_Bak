import React from 'react'

const Menu = () => {
  return (
    <nav className='flex-between w-full bg-primary-blue'>
        <div class="flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
            <ul class="w-full flex flex-col font-medium p-4 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm  md:border-0 md:bg-primary-blue dark:bg-primary-blue md:dark:bg-primary-blue dark:border-primary-blue gap-10">
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-primary-blue bg-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-primary-orange dark:bg-white-600 md:dark:bg-transparent" aria-current="page">
                        OpCen
                    </a>
                </li>
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-100 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-orange md:p-0 md:w-auto dark:text-whitew dark:hover:text-white dark:focus:text-white dark:border-white dark:hover:bg-white md:dark:hover:bg-transparent">
                        Data Analysis
                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    </button>
                    <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        {/* <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul> */}
                        {/* <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-primary-orange">Sign out</a>
                        </div> */}
                    </div>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white-400 md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent">
                        Risk Profile
                    </a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-200 md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent">
                        Communications
                    </a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white-400 md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent">
                        Reports
                    </a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white-400 md:dark:hover:text-primary-orange dark:hover:bg-gray-700 dark:hover:text-primary-orange md:dark:hover:bg-transparent">
                        Calendar
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Menu