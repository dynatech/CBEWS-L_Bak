'use client';
import { useState, useEffect } from 'react'

const Table = ({ content, actions }) => {
    const [tableContent, setTableContent] = useState(null);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        if (content) {
            setTableContent(content);
            let _pages = Math.ceil(content.data.length / 10);
            setPages(_pages);
        }
    }, [content]);

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="p-4 bg-white dark:bg-primary-blue border-t-2 border-r-2 border-l-2 border-gray-400">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-100 border border-gray-100 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-white dark:placeholder-gray-100 dark:text-white dark:focus:ring-primary-orange dark:focus:border-primary-orange" placeholder="Search for items" />
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-l-2 border-r-2 border-b-2 border-gray-400 drop-shadow-lg">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-primary-blue dark:text-primary-orange">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-100 rounded focus:ring-primary-orange dark:focus:ring-primary-orange dark:ring-primary-orange dark:focus:ring-offset-primary-orange focus:ring-1 dark:bg-gray-white dark:border-gray-100" />
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        {
                            tableContent && tableContent.headers.map((x) => (
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        {x}
                                        <a href="#"><svg class="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></a>
                                    </div>
                                </th>
                            ))
                        }
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableContent && tableContent.data.map((x) => (
                            <tr class="bg-gray-200 dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-yellow-500 dark:text-gray-700 dark:hover:text-gray-100">
                                <td class="w-4 p-4 border-r-2 border-gray-400 border-b-2">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-100 rounded focus:ring-primary-orange dark:focus:ring-primary-orange dark:ring-primary-orange dark:focus:ring-offset-primary-orange focus:ring-1 dark:bg-gray-white dark:border-gray-700" />
                                        <label for="checkbox-talbe-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                {
                                    Object.keys(x).map((key, index) => {
                                        if (index == 0) {
                                            return (
                                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap border-r-2 border-gray-400 border-b-2">
                                                    {x[key]}
                                                </th>
                                            )
                                        } else {
                                            return (
                                                <td class="px-6 py-4 border-r-2 border-gray-400 border-b-2">
                                                    {x[key]}
                                                </td>
                                            )
                                        }
                                    })
                                }
                                <td class="px-4 py-4 border-r-2 border-gray-400 border-b-2">
                                    <div className='flex gap-6 text-center justify-center'>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-primary-blue hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                                            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                                        </svg>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-primary-blue hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                        </svg>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-primary-blue hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-600">Showing <span class="font-semibold text-gray-900 dark:text-gray-700">1-10</span> of <span class="font-semibold text-gray-900 dark:text-gray-700">1000</span></span>
                <ul class="inline-flex -space-x-px text-sm h-8">
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-primary-blue dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    {
                        [...Array(pages).keys()].map((x)=> (
                            <li>
                                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-primary-blue dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{x+1}</a>
                            </li>
                        ))
                    }
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-primary-blue dark:border-gray-700 text-white dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Table