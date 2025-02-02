import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const ContactUs = () => {
  return (
    <>
      <div className="m-auto w-full">
        <div className="w-[80%] m-auto">
          <div className="text-3xl w-full mt-5 h-84">
            <div className="flex w-[60%] m-auto text-base md:text-2xl sm:flex-row items-center">
              <div className="basis-1/6 m-auto">
                <FontAwesomeIcon icon={faAddressCard} title="Our Physical Address" />
              </div>
              <div className="basis-5/6 my-3">
                <p className="m-auto">Secretary</p>
                <p className="m-auto">Sri Lanka Society of Queensland.</p>
                <p className="m-auto">PO Box 15099,</p>
                <p className="m-auto">CITY EAST QLD 4002.</p>
              </div>
            </div>
            <div className="flex w-[60%] m-auto text-base md:text-2xl sm:flex-row items-center">
              <div className="basis-1/6 m-auto">
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
