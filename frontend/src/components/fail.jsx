import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
export const FailMessage = ({
})=>{
    const location = useLocation();
    const message = location.state?.message || "Failed!";
    const from = location.state?.from || "signup";

    const retryLink = from === "signup" ? "/signup" : "/signin";
    const retryMessage = from === "signup"?"Sign up Failed" : "Sign in failed"
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center animate-fade-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            width={48}
            height={48}
          >
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> 
          </svg>
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">{retryMessage} !</h2>
          <p className="text-gray-600 mt-2">{message}</p>
          <Link to = "/signup">
          <button
            
            className="mt-6 px-4 py-2 mx-5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-200"
          >
            Skip
          </button>
          </Link>
          <Link to={retryLink}>
          <button
          
        className="mt-6 px-4 py-2 mx-5 bg-gray-400 hover:bg-gray-600 text-white rounded-lg transition duration-200"
      >
        Try again
      </button>
      </Link> 
        </div>
      </div>
    );
  
}