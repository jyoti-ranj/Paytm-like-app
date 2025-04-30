import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { FailMessage } from './fail';

export const Signin = ()=>{
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [status , setStatus] = useState("");
  const [showModal , setShowModal] = useState("")

const navigate = useNavigate();
async function handleSignin(){
  
  try{
    const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
      userName,
      password
    });

    localStorage.setItem("token", response.data.token);
    console.log("Sign up successful", response);
    navigate("/dashboard");
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Sign in Failed";
    navigate("/fail", { state: { message: errorMessage, from: "signin" } });
  }
  }
    return(
      <div>
          {showModal === "fail" && <FailMessage message={status} />}
    <div className="rounded-xl shadow-2xl bg-white overflow-hidden w-80 h-95 my-35 mx-150">
    <div className="flex justify-center w-full font-bold text-2xl font-sans my-3 ">
        <div>Sign in</div>
        </div> 
        <div className="flex justify-center w-full p-2 py-0.5 text-gray-600 text-md">
        <div className="text-center">Enter your information to create an account</div>
        </div>
        <div>
          <div>
            <div className="font-semibold mx-3.5">
            <div className="mx-2 px-1"><label htmlFor="">Email</label></div>
              <div className="border border-gray-200 m-2 rounded p-1 shadow-xs"><input type="email" placeholder="jhondoe123@example.com" onChange={(e)=>setUserName(e.target.value)} className="w-full outline-sky-400" /></div>
            </div>
            <div className="font-semibold mx-3.5">
            <div className="mx-2 px-1"><label htmlFor="">Password</label></div>
              <div className="border border-gray-200 m-2 rounded p-1 shadow-xs"><input type="text" onChange={(e)=>setPassword(e.target.value)} className="w-full outline-sky-400" /></div>
            </div>
            <div>
              <div className="p-4 m-1.5">
                <button className="bg-black w-full text-white p-1.5 rounded shadow-2xl" onClick={handleSignin}>Sign In</button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="">Don't have an accoun?</div>
            <Link to="/signup">
              <div className="underline px-1 font-semibold">
                Sign up
              </div>
            </Link>
            </div>
          </div>
        </div>
  </div>
  </div>
    )
  
}