import PDRRMO_SEAL from '@public/images/pdrrmo_seal.png';
import MDRRMO_SEAL from '@public/images/mdrrmo_seal.png';
import BRGY_SEAL from '@public/images/brgy_seal.png';
import DOST_SEAL from '@public/images/dost_seal.png';
import DYNASLOPE_SEAL from '@public/images/dynaslope_seal.png';
import Image from 'next/image';

const LandingPageLogos = () => {
  return (
    <div className="flex w-full gap-x-5 item-center justify-center">
        <Image 
            src={DYNASLOPE_SEAL}
            alt="Dynaslope seal"
            width={150}
            height={150}
            className="object-contain"
        />
        <Image 
            src={DOST_SEAL}
            alt="Phivolcs seal"
            width={150}
            height={150}
            className="object-contain"
        />
        <Image 
            src={PDRRMO_SEAL}
            alt="PDRRMO seal"
            width={150}
            height={150}
            className="object-contain"
        />
        <Image 
            src={MDRRMO_SEAL}
            alt="PDRRMO seal"
            width={150}
            height={150}
            className="object-contain"
        />
        <Image 
            src={BRGY_SEAL}
            alt="BRGY seal"
            width={150}
            height={150}
            className="object-contain"
        />
        <Image 
            src={BRGY_SEAL}
            alt="LEWC seal"
            width={150}
            height={150}
            className="object-contain"
        />
    </div>
  )
}

export default LandingPageLogos