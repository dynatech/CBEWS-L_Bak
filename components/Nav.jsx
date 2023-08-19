'use client'

import PDRRMO_SEAL from '@public/images/pdrrmo_seal.png';
import MDRRMO_SEAL from '@public/images/mdrrmo_seal.png';
import BRGY_SEAL from '@public/images/brgy_seal.png';
import DOST_SEAL from '@public/images/dost_seal.png';
import DYNASLOPE_SEAL from '@public/images/dynaslope_seal.png';

import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(()=> {
    if (window.location.pathname == '/dashboard') {
        setIsSignedIn(true);
    }
  }, [props]);

  return (
    isSignedIn ?
        <nav className='flex-between w-full mb-16 pt-3'>
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

            {/* Mobile */}
            <div className='sm:flex hidden'>
                <button tyle="button" onClick={()=> { console.log("LOG ME HERE")}} className="outline_btn">
                    Feedback
                </button>
            </div>
        </nav>
    :
    <></>
  )
}

export default Nav