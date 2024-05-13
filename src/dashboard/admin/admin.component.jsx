import React from 'react';
import Sidebar from '../../components/sidebar/sidebar.component';
import "./admin.styles.css";

// const CreatePaymentModal = ({ isOpen, isClose }) => {
//   const [paymentData, setPaymentData] = useState({

//   })
// }

const AdminPanel = () => {
  return (
    <>
      <div className="web-page p-0">
        <div className="left-view col-3 p-0">
          <Sidebar />
        </div>
        <div className="right-view">
          <div className="">
            <div className="flex flex-row p-10 justify-between mb-4">
              <div className="flex-grow mr-4">
                <input
                  type="text"
                  className="border border-gray-300 rounded-full py-2 focus:outline-none px-4 h-10 w-100%"
                  placeholder="Search"
                />
              </div>
              <div>
                <button className="bg-green-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full h-10">
                  Create payment 
                </button>
              </div>
            </div>
            <div className="w-full flex-grow mt-20">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 text-center py-2">559u44j</td>
                    <td className="border px-4 text-center py-2">John Doe</td>
                    <td className="border px-4 text-center py-2">100</td>
                    <td className="border px-4 text-center py-2">Paid</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
