import { PastEventsData } from '../data/past-events';
import Card from '../generic/card.componnent';

const PastEvents = () => {
  return (
    <>
      <div className="container flex m-auto">
        <div className="w-[100%] p-4 m-auto flex-auto columns-1 justify-items-center gap-3 grow md:columns-2 lg:columns-3">
          {PastEventsData.map((img) => {
            return <Card url={img.url} alt={img.alt} key={img.url} event="Past" />;
          })}
        </div>
      </div>
    </>
  );
};

export default PastEvents;
