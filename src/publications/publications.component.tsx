import Publication from '../generic/publication.component';
import { PUBLICATIONS } from '../data/publications';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// import constitution_pdf from '../assets/publications/constitution/Sri-Lanka-Constitution.pdf';
import Membership_form_Revised from '../assets/publications/Membership-Form-Revised.pdf';
import NominationForm from '../assets/publications/NominationForm.doc';
import ProxyForm from '../assets/publications/ProxyForm.doc';
import Download from '../generic/download.component';

const Publications = () => {
  // const handleDownloadConstitutionClick = () => {
  //   // const ele = e.target as HTMLElement;
  //   // let url = ele.attributes.item(0)?.value.substring(1);

  //   fetch(constitution_pdf).then((res) => {
  //     res.blob().then((blob) => {
  //       const fileUrl = window.URL.createObjectURL(blob);
  //       const aLink = document.createElement('a');
  //       aLink.href = fileUrl;
  //       aLink.download = 'SLSQ-Constitution';
  //       aLink.click();
  //     });
  //   });

  //   return;
  // };

  const handleDownloadMembershipFormClick = () => {
    fetch(Membership_form_Revised).then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        const aLink = document.createElement('a');
        aLink.href = fileUrl;
        aLink.download = 'Membership-Form-Revised';
        aLink.click();
      });
    });
  };

  const handleDownloadNominationFormClick = () => {
    fetch(NominationForm).then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        const aLink = document.createElement('a');
        aLink.href = fileUrl;
        aLink.download = 'NominationForm';
        aLink.click();
      });
    });
  };

  const handleDownloadProxyFormClick = () => {
    fetch(ProxyForm).then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        const aLink = document.createElement('a');
        aLink.href = fileUrl;
        aLink.download = 'ProxyForm';
        aLink.click();
      });
    });
  };

  return (
    <>
      <div className="container flex m-auto w-[100%]">
        <div className="container flex flex-col m-auto mx-5 p-5">
          <div className="flex-1 w-4/6 pb-5 pt-5 m-auto">
            <table className="w-full m-auto">
              <thead>
                <tr className="text-xl font-semibold text-center">
                  <td colSpan={4}>Monthly News Letters</td>
                </tr>
              </thead>
              <tbody>
                {PUBLICATIONS.map((publication) => {
                  return (
                    <>
                      <tr className="bg-[#e4cfff] h-10 sm:text-table-body-mobile md:text-table-body-tablet lg:text-table-body-laptop">
                        <td colSpan={4} className="text-center" key={publication.year}>
                          {publication.year}
                        </td>
                      </tr>

                      <tr className="h-10 pl-5">
                        <div className="flex flex-col sm:justify-around sm:text-center md:flex-row">
                          {publication.months.map((m) => {
                            return (
                              <td className="text-center flex-col md:flex-row my-3" key={m.date}>
                                <Publication
                                  year={Number(publication.year)}
                                  months={publication.months}
                                  month={m.date}
                                  file={m.file}
                                />
                              </td>
                            );
                          })}
                        </div>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>

            <table className="w-full m-auto">
              <thead>
                <tr className="text-xl font-semibold text-center">
                  <td colSpan={4}>Forms and Constitution</td>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#e4cfff]">
                  <td colSpan={4}>
                    <Download
                      handleClick={() => handleDownloadMembershipFormClick()}
                      text="MemberShip Form download"
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4cfff]">
                  <td colSpan={4}>
                    <Download
                      handleClick={() => handleDownloadNominationFormClick()}
                      text="Nomination Form download"
                    />
                  </td>
                </tr>
                <tr className="bg-[#e4cfff]">
                  <td colSpan={4}>
                    <Download
                      handleClick={() => handleDownloadProxyFormClick()}
                      text="Proxy Form download"
                    />
                  </td>
                </tr>
                {/* <tr className="bg-[#e4cfff] text-center h-10 py-3">
                  <td colSpan={4}>
                    <Download
                      handleClick={() => handleDownloadConstitutionClick()}
                      text="Sri Lanka Society of Queensland Inc. Constitution download"
                    />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;

// https://stackoverflow.com/questions/44561037/loop-in-return-statement-of-a-component-in-react-js
