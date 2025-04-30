import { Link } from "react-router-dom";

export const TransferSuccess = () =>{

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center animate-fade-in-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              width={48}
              height={48}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">Transaction Successful</h2>
            <p className="text-gray-600 mt-2">Your money has been transferred successfully.</p>
            <Link to = "/dashboard">
            <button
              
              className="mt-6 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200"
            >
              Close
            </button>
            </Link>
          </div>
        </div>
      );
      
}
