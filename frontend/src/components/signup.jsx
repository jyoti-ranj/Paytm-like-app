import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { SuccessMessage } from './success';
import { FailMessage } from './fail';

export const Signup = ()=>{
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [gender , setGender] = useState("");
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [status , setStatus] = useState("");
  const [showModal , setShowModal] = useState("")

const navigate = useNavigate();
async function handleSignup(){
  
  try{
    const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
      firstName,
      lastName,
      gender,
      userName,
      password
    });
    console.log("Sign up successful", response);
    navigate("/success", { state: { message: response.data.message } });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Sign up Failed";
    navigate("/fail", { state: { message: errorMessage, from: "signup" } });
  }
  }

return (
  <div>
    {showModal === "success" && <SuccessMessage message={status} />}
    {showModal === "fail" && <FailMessage message={status} />} 
    <div className="rounded-xl shadow-2xl bg-white overflow-hidden w-80 h-147 my-15 mx-150">
    <div className="flex justify-center w-full font-bold text-2xl font-sans my-3 ">
        <div>Sign Up</div>
        </div> 
        <div className="flex justify-center w-full p-2 py-0.5 text-gray-600 text-md">
        <div className="text-center">Enter your information to create an account</div>
        </div>
        <div>
          <div>
            <div className="font-semibold mx-3.5">
              <div className="mx-2 px-1"><label htmlFor="">First Name</label></div>
              <div className="border border-gray-200 m-2 rounded p-1 shadow-xs"><input type="text" placeholder="Jhon" onChange={(e)=>setFirstName(e.target.value)} className="w-full outline-sky-400" /></div>
            </div>
            <div className="font-semibold mx-3.5">
            <div className="mx-2 px-1"><label htmlFor="">Last Name</label></div>
              <div className="border border-gray-200 m-2 rounded p-1 shadow-xs"><input type="text" placeholder="Doe" onChange={(e)=>setLastName(e.target.value)} className="w-full outline-sky-400" /></div>
            </div>
          <div className="font-semibold mx-6.5">
            <label htmlFor="">Gender</label>
          </div>
          <div className="m-2 flex gap-4 mx-6.5 ">
            <div>
              <input type="radio" id="male" name="gender" value="male"  onChange={(e)=>setGender(e.target.value)} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" onChange={(e)=>setGender(e.target.value)}  />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" id="other" name="gender" value="other" onChange={(e)=>setGender(e.target.value)}  />
              <label htmlFor="other">Other</label>
            </div>
          </div>

            <div className="font-semibold mx-3.5">
            <div className="mx-2 px-1"><label htmlFor="">Email</label></div>
              <div className="border border-gray-200 m-2 rounded p-1 shadow-xs"><input type="email" placeholder="jhondoe123@example.com" onChange={(e)=>setUserName(e.target.value)} className="w-full outline-sky-400" /></div>
            </div>
            <div className="font-semibold mx-3.5">
            <div className="mx-2 px-1"><label htmlFor="">Password</label></div>
              <div className="border border-gray-200 m-2 rounded p-1 shadow-xs"><input type="text" onChange={(e)=>setPassword(e.target.value)} className="w-full outline-sky-400"/></div>
            </div>
            <div>
              <div className="p-4 m-1.5">
                <button className="bg-black w-full text-white p-1.5 rounded shadow-2xl" onClick={handleSignup}>Sign Up</button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="">Already have an accoun?</div>
            <Link to="/signin">
              <div className="underline px-1 font-semibold">
                Login
              </div>
            </Link>
            </div>
          </div>
        </div>
  </div>
    </div>
    )
}
