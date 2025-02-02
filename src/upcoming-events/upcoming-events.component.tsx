import Card from '../generic/card.componnent';

const UpcomingEvents = () => {
  return (
    <div>
      <div className="container m-auto w-[100%]">
        <div className="mx-5 mt-5">
          <div className="flex m-auto columns-1 justify-items-center gap-5">
            <div className="w-[100%] shadow-black shadow-2xl p-5">
              <Card
                url="../assets/upcoming-events/New-Year-2021-page-001-1583x2048.jpg"
                alt="New Year 2021"
                event="UpComing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
