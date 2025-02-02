import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEvent } from 'react';
type SLSQButton = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  icon?: any | undefined;
  caption: string;
  classname: string;
};

const Button = ({ onClick, icon, caption, classname }: SLSQButton) => {
  return (
    <>
      <div className="flex justify-around">
        <button onClick={(e) => onClick(e)} className={classname}>
          <FontAwesomeIcon icon={icon ?? undefined} />
          <span className="pl-5">{caption}</span>
        </button>
      </div>
    </>
  );
};

export default Button;
