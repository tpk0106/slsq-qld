const AboutUs = () => {
  return (
    <>
      <div className="m-auto w1-screen">
        <div className="container1 w1-screen">
          <div className="w-[90%] flex flex-col flex-wrap md:flex-col lg:flex-row items-center content-between mt-16 sm:mt-3 mx-[5%]">
            <div className="flex-1 text-3xl mx-5 p-[1em]">
              <div className="flex flex-col items-center content-center">
                <p className="text-base md:text-[20px] lg:text-[30px] mb-3">Rules & Objectives</p>
                <p
                  id="rules"
                  className="text-base md:text-[20px] lg:text-[30px] mb-5 drop-shadow-[1px_1px_rgba(0,0,0,1)] text-center"
                >
                  We are a community organisation dedicated to the celebration and understanding of
                  Sri Lankan culture within Queensland, Australia. As such, we have developed the
                  following seven principles.
                </p>
                <p className="text-base md:text-[20px] lg:text-[30px] p-5 text-center">
                  The goals of the Sri Lanka Society of Queensland are:
                </p>
              </div>

              <div className="mt-8 text-center">
                <ul className="text-base md:text-[20px] lg:text-[30px] 1leading1-relaxed sm1:leading-normal">
                  <li className="m-[1em] drop-shadow-[1px_1px_rgba(0,0,0,1)]">
                    <span className="text-[#a855f7] font-[900] text-[2em] drop-shadow-[4px_4px_rgba(0,0,0,1)] mr-3">
                      To
                    </span>
                    promote harmonious co-operation and friendship amongst all immigrants from Sri
                    Lanka and Australians irrespective of race, religion, politics or other
                    differences
                  </li>
                  <li className="m-[1em] drop-shadow-[1px_1px_rgba(0,0,0,1)]">
                    <span className="text-[#a855f7] font-[900] text-[2em] drop-shadow-[4px_4px_rgba(0,0,0,1)] mr-3">
                      To
                    </span>
                    preserve, promote and project the culture of Sri Lanka.
                  </li>
                  <li className="m-[1em] drop-shadow-[1px_1px_rgba(0,0,0,1)]">
                    <span className="text-[#a855f7] font-[900] text-[2em] drop-shadow-[4px_4px_rgba(0,0,0,1)] mr-3">
                      To
                    </span>
                    render assistance to students and immigrants from Sri Lanka.
                  </li>
                  <li className="m-[1em] drop-shadow-[1px_1px_rgba(0,0,0,1)]">
                    <span className="text-[#a855f7] font-[900] text-[2em] drop-shadow-[4px_4px_rgba(0,0,0,1)] mr-3">
                      To
                    </span>
                    encourage and foster recreational, sporting and social activities.
                  </li>
                  <li className="m-[1em] drop-shadow-[1px_1px_rgba(0,0,0,1)]">
                    <span className="text-[#a855f7] font-[900] text-[2em] drop-shadow-[4px_4px_rgba(0,0,0,1)] mr-3">
                      To
                    </span>
                    publish and circulate news of Sri Lanka and local events.
                  </li>
                  <li className="m-[1em] drop-shadow-[1px_1px_rgba(0,0,0,1)]">
                    <span className="text-[#a855f7] font-[900] text-[2em] drop-shadow-[4px_4px_rgba(0,0,0,1)] mr-3">
                      To
                    </span>
                    render assistance to the people of Sri Lanka in times of need, at the discretion
                    of the Management Committee.
                  </li>
                  <li className="m-[1em] drop-shadow-[1px_1px_rgba(0,0,0,1)]">
                    The Rules of the Society are those of a non-profit society.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
