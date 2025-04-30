import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const SendMoney = () => {
  const location = useLocation();
  const toUserId = location.state?.toUserId; // Username passed from dashboard
  const toUserName = location.state?.toUserName;
  
  

  const [amount, setAmount] = useState("");

  const navigate = useNavigate();

  const handleTransfer = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/api/v1/account/transfer`,
        {
          to:toUserId,
          amount: Number(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/transfer", { state: { message: response.data.message } });
    } catch (error) {
      const errorMessage = error.response?.data?.message
      navigate("/failtransfer", {  state: {
        message: errorMessage,
        toUserId,
        toUserName,
        amount
      }});
    }
  };

  return (
    <div className="rounded-xl shadow-2xl bg-white overflow-hidden w-80 h-75 my-35 mx-150">
      <div className="flex justify-center w-full font-bold text-2xl font-sans my-3 ">
        <div className="text-2xl p-3 py-4">Send Money</div>
      </div>
      <div className="py-3">
        <div className="grid grid-cols-6">
          <div className="bg-green-500 rounded-full w-10 h-10 text-white col-span-1 text-center font-normal text-2xl mx-6 py-0.5">
            {toUserName?.[0]?.toUpperCase() || "U"}
          </div>
          <div className="font-bold col-span-5 text-xl mx-6 my-1">{toUserName}</div>
        </div>
        <div>
          <div className="font-semibold mx-3.5">
            <div className="mx-2 px-1">
              <label>Amount (in Rs)</label>
            </div>
            <div className="border border-gray-200 m-2 rounded p-1 shadow-xs ">
              <input
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => setAmount(e.target.value)}
                className="w-full outline-sky-400"
              />
            </div>
          </div>
          <div>
            <div className="p-4 m-1.5">
              <button
                className="bg-green-500 w-full text-white p-1.5 rounded shadow-2xl"
                onClick={handleTransfer}
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
