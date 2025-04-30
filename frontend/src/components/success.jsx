import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export const SuccessMessage = ({ 
})=>{
    const location = useLocation();
    const message = location.state?.message || "Success!";

    return <div className="rounded-xl shadow-2xl bg-white overflow-hidden w-150 h-70 my-48 mx-120">
    <div className='grid grid-cols-5 text-center mx-28'>  
    <div className="flex justify-center w-full font-bold text-2xl font-sans my-3 mx-16 col-span-4">
        <div className="text-2xl p-3 py-4 px-1">Success</div>
        <div className='text-green-400 col-span-1'>
            <div className='flex justify-start my-5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg></div></div>
        </div> 
        </div>
        <div className="py-1">
            <div className="grid grid-cols-6 mx-38 my-1">
                <div className='mx-7'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-9">
                    <defs>
                        <linearGradient id="myGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#F43F5E" />
                            <stop offset="50%" stop-color="#6366F1" />
                            <stop offset="100%" stop-color="#F59E0B" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#myGradient)" stroke="none" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
                <div className="font-bold col-span-5 text-xl mx-4 my-1">Signup successfully</div>
            </div>
          <div>
            <div className="font-semibold mx-1 p-4 px-60">
            <div className="mx-5 px-1 inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full"><label htmlFor="">{message}</label></div>
              </div>
            <div>
              <div className='grid grid-cols-2'>
              <div className="p-4 m-1.5 col-span-1 px-1">
              <Link to="/signin">
              <button className="bg-sky-500 w-full text-white p-1.5 rounded shadow-2xl">Sign in</button>
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