import { Committee_Members } from '../data/data-members';
import { pastPresidents } from '../data/past-presidents';

import { TableColumn, Theme } from 'react-data-table-component';
import DataTable from 'react-data-table-component';
//import { DefaultTheme } from 'styled-components';
import { defaultThemes } from 'react-data-table-component';

const CommitteeMembers = () => {
  const cols = [
    {
      name: 'Post',
      selector: (r: any) => r.post,
      //   style: {
      //     background: '#c18efd',
      //   },
    },
    {
      name: 'Name',
      selector: (r: any) => r.name,
      //   style: {
      //     background: '#c18efd',
      //   },
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '45px', // override the row height
        backgroundColor: '#f6efff',
        // '&:nth-of-type(3)': {
        //    backgroundColor: '#f6efhf',
        //   borderBottomColor: theme.background.default,
        // },
      },
      header: {
        style: {
          fontSize: '52px',
          backgroundColor: '#c18efd',
          // color: theme.text.primary,
          // backgroundColor: theme.background.default,
          minHeight: '56px',
          paddingLeft: '16px',
          paddingRight: '8px',
        },
      },
      headCells: {
        style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
          backgroundColor: '#c18efd',
          justifyContent: 'center',
        },
      },
      cells: {
        style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
          backgroundColor: '#eddfff',
        },
      },
    },
  };

  return (
    <div className="container m-auto w-[100%]">
      <div className="flex m-auto">
        <div className="w-[100%] flex flex-col m-auto pt-5 mx-5">
          <div className="flex-1 m-auto w-2/3 pb-5">
            <table className="w-full">
              <thead>
                <tr className="text-xl font-semibold bg-[#c18efd] h-20 text-center">
                  <td colSpan={2}>Members</td>
                </tr>
              </thead>
              <tbody>
                {Committee_Members.map((member) => {
                  return (
                    <>
                      <tr className="odd:bg-[#e4cfff] even:bg-[#ffffff] h-10 sm:text-table-body-mobile md:text-table-body-tablet lg:text-table-body-laptop">
                        <td className="pl-5">{member.post}</td>
                        <td>{member.name}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            {/* <DataTable
              columns={cols}
              data={Committee_Members}
              title="Committee Members"
              // fixedHeader
              customStyles={customStyles}
            /> */}
          </div>
          {/* <div className="flex-1 w-full text-xl pb-5 border-4 border-red-600"> */}
          <div className="flex-1 m-auto w-2/3  pb-5">
            <table className="w-full">
              <thead>
                <tr className="text-xl font-semibold bg-[#c18efd] h-20 text-center">
                  <td colSpan={2}>Sri Lanka Society QLD: Past Presidents</td>
                </tr>
              </thead>
              <tbody>
                {pastPresidents.map((president) => {
                  return (
                    <>
                      <tr className="odd:bg-[#e4cfff] even:bg-[#fff] h-10 sm:text-table-body-mobile md:text-table-body-tablet lg:text-table-body-laptop">
                        <td className="pl-5">{president.period}</td>
                        <td>{president.name}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeMembers;
