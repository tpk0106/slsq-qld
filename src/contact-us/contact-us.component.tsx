import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const ContactUs = () => {
  return (
    <>
      <div className="m-auto w-full">
        <div className="flex flex-col justify-around items-center">
          <div className="text-3xl w-full mt-5 h-84 pt-5">
            <div className="flex w-[50%] m-auto justify-around text-base md:text-2xl sm:flex-row items-center">
              <div className="px-3 md:p-0 m-auto">
                <FontAwesomeIcon icon={faAddressCard} title="Our Physical Address" />
              </div>
              <div className="basis-5/6 my-3">
                <p className="m-auto">Secretary</p>
                <p className="m-auto">Sri Lanka Society of Queensland.</p>
                <p className="m-auto">PO Box 15099,</p>
                <p className="m-auto">CITY EAST QLD 4002.</p>
              </div>
            </div>
            <div className="flex w-[50%] m-auto text-base md:text-2xl sm:flex-row items-center">
              <div className="px-3 md:p-0 m-auto">
                <FontAwesomeIcon icon={faEnvelope} title="Our Email address" />
              </div>
              <div className="basis-5/6 my-3">
                <p className="m-auto">secretary&#64;srilankansqld.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
