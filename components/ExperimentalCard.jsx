import React from 'react'
import DYNASLOPE_LOGO from '@public/images/dynaslope_seal.png'

const NormalCard = ({header, content}) => {
    return (
        <div class="max-w-sm p-6 bg-gray-200 border border-gray-400 rounded-md shadow drop-shadow-2xl dark:bg-gray-200 dark:border-gray-400">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-primary-blue">{header}</h5>
            </a>
            <p class="mb-3 font-normal text-primary-blue dark:text-primary-blue">
                {content}
            </p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-primary-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    )
}

const ThumbnailCard = () => {
    return (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={DYNASLOPE_LOGO} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

const PreviewCard = () => {
    return (<h1>Prewview Card</h1>)
}

const ExperimentalCard = ({ type, header, content }) => {

    let Card = null;
    switch (type) {
        case "banner":
            Card = <ThumbnailCard header={header} content={content}/>
            break;
        case "normal":
            Card = <NormalCard header={header} content={content}/>
            break;
        case "preview":
            Card = <PreviewCard header={header} content={content}/>
            break;
        default:
            Card = <NormalCard header={header} content={content}/>
            break;
    }
    return Card
}

export default ExperimentalCard