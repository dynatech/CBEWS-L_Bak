'use client'

import PDRRMO_SEAL from '@public/images/pdrrmo_seal.png';
import MDRRMO_SEAL from '@public/images/mdrrmo_seal.png';
import BRGY_SEAL from '@public/images/brgy_seal.png';
import DOST_SEAL from '@public/images/dost_seal.png';
import DYNASLOPE_SEAL from '@public/images/dynaslope_seal.png';
import AVATAR from '@public/icons/ProfileIcon.png';

import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    session?.user ?
        <nav className='flex-between w-full pt-3 bg-transparent px-10 py-5'>
            <Link href="/" className="flex gap-3 flex-center">
                <Image 
                    src={DYNASLOPE_SEAL}
                    alt="Dynaslope seal"
                    width={75}
                    height={75}
                    className="object-contain"
                />
                <Image 
                    src={DOST_SEAL}
                    alt="Phivolcs seal"
                    width={75}
                    height={75}
                    className="object-contain"
                />
                <Image 
                    src={PDRRMO_SEAL}
                    alt="PDRRMO seal"
                    width={75}
                    height={75}
                    className="object-contain"
                />
                <Image 
                    src={MDRRMO_SEAL}
                    alt="PDRRMO seal"
                    width={75}
                    height={75}
                    className="object-contain"
                />
                <Image 
                    src={BRGY_SEAL}
                    alt="BRGY seal"
                    width={75}
                    height={75}
                    className="object-contain"
                />
                <Image 
                    src={BRGY_SEAL}
                    alt="LEWC seal"
                    width={75}
                    height={75}
                    className="object-contain"
                />
            </Link>
            <div className='sm:flex hidden gap-4'>
                <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button"> 
                    <svg className="w-5 h-5 fill-primary-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14 20">
                        <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
                    </svg>
                    <div className="relative flex">
                        <div className="relative inline-flex w-3 h-3 bg-primary-orange border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900" />
                    </div>
                </button>
                <div className="flex items-center">
                    <Image
                        src={AVATAR}
                        alt="Avatar"
                        className="rounded-full w-10 h-10 mr-2"
                    />
                </div>
            </div>
        </nav>
    :
    <></>
  )
}

export default Nav