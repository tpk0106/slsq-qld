import { DownloadIcon } from './icons.component';

type DownloadButton = {
  handleClick: () => void;
  // icon: any; // typeof FontAwesomeIcon;
  text: string;
};

const Download = ({ handleClick, text }: DownloadButton) => {
  return (
    <>
      <div className="flex justify-around">
        <button
          onClick={() => handleClick()}
          className="drop-shadow-2xl flex shadow-[#a855f7] bg-violet-500 text-white border-black my-2 mx-2 p-1 rounded-sm hover:cursor-pointer  hover:bg-violet-300 hover:text-black hover:border-gray-500 w-[60%] justify-center"
        >
          <DownloadIcon cssstyle="w-[1em] h-[1em] mt-1" />
          <span className="pl-1">{text}</span>
        </button>
      </div>
    </>
  );
};

export default Download;
