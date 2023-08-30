import { useEffect, useState } from 'react';

const AlertBanner = ({alertLevel}) => {

  return (
    <div className="w-full text-center flex item-center justify-center py-5 drop-shadow-lg ">
        <h4 className={`font-bold text-primary-blue-100 text-4xl bg-alert-${alertLevel} px-10 py-3 border px-14`}>
            Alert Level {alertLevel}
        </h4>
    </div>
  )
}

export default AlertBanner