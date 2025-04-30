import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export const SuccessMessage = ({ 
})=>{
    const location = useLocation();
    const message = location.state?.message || "Success!";

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
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">Sign up successfully!</h2>
          <p className="text-gray-600 mt-2">{message}</p>
          <Link to = "/signin">
          <button
            
            className="mt-6 px-4 py-2 mx-5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition duration-200"
          >
            Go to login
          </button>
          </Link>
          <Link to="/">
          <button
          
        className="mt-6 px-4 py-2 mx-5 bg-gray-400 hover:bg-gray-600 text-white rounded-lg transition duration-200"
      >
        Skip
      </button>
      </Link> 
        </div>
      </div>
    );
  
}