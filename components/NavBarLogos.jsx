import PDRRMO_SEAL from '@public/images/pdrrmo_seal.png';
import MDRRMO_SEAL from '@public/images/mdrrmo_seal.png';
import BRGY_SEAL from '@public/images/brgy_seal.png';
import DOST_SEAL from '@public/images/dost_seal.png';
import DYNASLOPE_SEAL from '@public/images/dynaslope_seal.png';
import Link from 'next/link';
import Image from 'next/image';

const NavBarLogos = () => {
  return (
    <Link href="/" className="flex gap-3 flex-center">
        <Image 
            src={DYNASLOPE_SEAL}
            alt="Dynaslope seal"
            width={55}
            height={55}
            className="object-contain"
        />
        <Image 
            src={DOST_SEAL}
            alt="Phivolcs seal"
            width={55}
            height={55}
            className="object-contain"
        />
        <Image 
            src={PDRRMO_SEAL}
            alt="PDRRMO seal"
            width={55}
            height={55}
            className="object-contain"
        />
        <Image 
            src={MDRRMO_SEAL}
            alt="PDRRMO seal"
            width={55}
            height={55}
            className="object-contain"
        />
        <Image 
            src={BRGY_SEAL}
            alt="BRGY seal"
            width={55}
            height={55}
            className="object-contain"
        />
        <Image 
            src={BRGY_SEAL}
            alt="LEWC seal"
            width={55}
            height={55}
            className="object-contain"
        />
    </Link>
  )
}

export default NavBarLogos