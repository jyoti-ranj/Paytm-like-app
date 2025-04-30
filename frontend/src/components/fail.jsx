import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
export const FailMessage = ({
})=>{
    const location = useLocation();
    const message = location.state?.message || "Failed!";
    const from = location.state?.from || "signup";

    const retryLink = from === "signup" ? "/signup" : "/signin";
    return <div className="rounded-xl shadow-2xl bg-white overflow-hidden w-150 h-70 my-48 mx-120">
    <div className='grid grid-cols-5 text-center'>  
    <div className="flex justify-center w-full font-bold text-2xl font-sans my-3 mx-16 col-span-4">
        <div className="text-2xl p-3 py-4 px-1">Failed</div>
        <div className='text-red-500 col-span-1'>
                    <div className='flex justify-start my-5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                    </svg>
</div></div>
        </div> 
        </div>
        <div className="py-1">
            <div className="grid grid-cols-6 mx-30 my-1">
                <div className='mx-6 text-yellow-300 my-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                </svg>
              </div>
                <div className="font-bold col-span-5 text-xl mx-0.5 my-1">Something went wrong !</div>
            </div>
          <div>
            <div className="font-semibold mx-1 p-4 px-40">
            <div className="mx-5 px-1 inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full"><label htmlFor="">{message}</label></div>
              </div>
            <div>
              <div className='grid grid-cols-2'>
              <div className="p-4 m-1.5 col-span-1 px-1">
              <Link to={retryLink}>
              <button className="bg-sky-500 w-full text-white p-1.5 rounded shadow-2xl">Try again</button>
            </Link>
              </div>
              <div className="p-4 m-1.5 col-span-1 px-1">
              <Link to="/signup">
              <button className="bg-gray-200 w-full text-black p-1.5 rounded shadow-2xl">Skip</button> 
            </Link> 
              </div>
              </div>
            </div>
          </div>
        </div>
  </div>
  
}