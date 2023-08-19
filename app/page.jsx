import PDRRMO_SEAL from '@public/images/pdrrmo_seal.png';
import MDRRMO_SEAL from '@public/images/mdrrmo_seal.png';
import BRGY_SEAL from '@public/images/brgy_seal.png';
import DOST_SEAL from '@public/images/dost_seal.png';
import DYNASLOPE_SEAL from '@public/images/dynaslope_seal.png';
import Image from 'next/image';

const Landing = () => {
  return (
    <section className="h-screen w-full flex-center item-center justify-center flex-col">
      <div className="flex-between w-full">
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
      <h1 className="head_text text-center">
          <br className="max-md:hidden"/>
          <span className="orange_gradient text-center">Community Based Early Warning System for Landslides</span>
      </h1>
      <h1 className="subhead_text text-center text-primary-blue">
        Brgy. Poblacion, Bakun, Benguet
      </h1>
      <p className="desc text-center">
          Empowering Safety: Uniting Communities with Timely Landslide Alerts
      </p>
      <div className="flex p-10 gap-x-4 w-full flex-center">
        <button tyle="button" className="text-white bg-primary-blue rounded-full p-4 flex-center">Log-in account
        </button>
        <button tyle="button" className="text-white bg-primary-orange rounded-full p-4">Register an account</button>
      </div>
    </section>
  )
}

export default Landing