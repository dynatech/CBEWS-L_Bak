'use client';
import moment from "moment";

const PendingAlertCard = () => {
    const DEMO = {
        alert_level: 1,
        validity: moment("2023-01-01 00:00:01").format("YYYY-MM-DD HH:mm:ss"),
        ts_start: moment("2023-01-01 00:00:01").format("YYYY-MM-DD HH:mm:ss"),
        trigger: "rainfall",
        ts_trigger: moment("2023-01-01 00:00:01").format("YYYY-MM-DD HH:mm:ss"),
        tech_info: "RAIN BKN (0.66 km away): 3-day cumulative rainfall (173.50 mm) exceeded threshold (115.32 mm)"
    }
    return (
        <div className="block rounded-lg bg-white drop-shadow-md">
            <div className={`flex justify-between border-b-2 border-neutral-100 px-6 py-3 dark:border-alert-${DEMO.alert_level} bg-alert-${DEMO.alert_level}`}>
                <div>
                    <p className="text-primary-blue text-xl font-bold">Alert level {DEMO.alert_level}</p>
                </div>
                <div>
                    <p className="text-primary-blue text-xl font-bold">Data Timestamp: {DEMO.ts_trigger}</p>
                </div>
                <div>
                    <p className="text-primary-blue text-xl font-bold">On-going</p>
                </div>
            </div>
            <div className="flex justify-between text-center p-6">
                <div>
                    <p className="text-xl">
                        Trigger
                    </p>
                    <p className="text-xl">
                        --
                    </p>
                </div>
                <div>
                    <p className="text-xl">
                        Trigger Timestamp
                    </p>
                    <p className="text-xl">
                        --
                    </p>
                </div>
                <div>
                    <p className="text-xl">
                        Technical Information
                    </p>
                    <p className="text-xl">
                        --
                    </p>
                </div>
                <div>
                    <button type="button" className="text-white bg-primary-blue rounded-full p-2 flex-center">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="pl-1">Validate</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

const EventAlertCard = () => {
    const DEMO = {
        alert_level: 1,
        validity: moment("2023-01-01 00:00:01").format("YYYY-MM-DD HH:mm:ss"),
        ts_start: moment("2023-01-01 00:00:01").format("YYYY-MM-DD HH:mm:ss"),
        trigger: "rainfall",
        ts_trigger: moment("2023-01-01 00:00:01").format("YYYY-MM-DD HH:mm:ss"),
        tech_info: "RAIN BKN (0.66 km away): 3-day cumulative rainfall (173.50 mm) exceeded threshold (115.32 mm)"
    }
    return (
        <div className="block rounded-lg bg-white drop-shadow-md">
            <div className={`flex justify-between border-b-2 border-neutral-100 px-6 py-3 dark:border-alert-${DEMO.alert_level} bg-alert-${DEMO.alert_level}`}>
                <div className="flex justify-center items-center">
                    <p className="text-primary-blue text-xl font-bold">Alert level {DEMO.alert_level}</p>
                </div>
                <div className="text-center">
                    <p className="text-primary-blue text-xl font-bold">Data and Time: {DEMO.ts_trigger}</p>
                    <p className="text-primary-blue text-xl font-bold">Validity: {DEMO.ts_trigger}</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-primary-blue text-xl font-bold">On-going</p>
                </div>
            </div>
            <div className="flex justify-between text-center p-6">
                <div>
                    <p className="text-xl">
                        Trigger
                    </p>
                    <p className="text-xl">
                        --
                    </p>
                </div>
                <div>
                    <p className="text-xl">
                        Trigger Timestamp
                    </p>
                    <p className="text-xl">
                        --
                    </p>
                </div>
                <div>
                    <p className="text-xl">
                        Technical Information
                    </p>
                    <p className="text-xl">
                        --
                    </p>
                </div>
            </div>
        </div>
    )
}

export {
    PendingAlertCard,
    EventAlertCard
}