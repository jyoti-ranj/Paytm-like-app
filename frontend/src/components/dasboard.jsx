import {useState,useEffect ,Link} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Dashboard = ()=>{
  const [firstName , setFirstName] = useState("");
  const [balance , setBalance] = useState("");
  const [search,setSearch] = useState("")
  const [users , setUsers] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Make sure token is stored on signin

        const response = await axios.get("http://localhost:3000/api/v1/user/user", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const fullFirstName = response.data.firstName;
        const displayName = fullFirstName.split(" ")[0];
        setFirstName(displayName);
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token || search.trim() === "") return;
    const delayDebounce = setTimeout(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${search}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          setUsers(res.data.users);
        })
        .catch((err) => {
          console.error("Error fetching users", err);
        });
      }, 300);
      return () => clearTimeout(delayDebounce);
  },[search])


    return <div className="">
        <div className="grid grid-cols-4 border border-gray-300 py-0.5">
             <div className="col-span-2">
              <div className="flex justify-start font-bold text-xl py-4 px-3 ">Payments App</div>
             </div>
             <div className="col-span-2">
              <div className="grid grid-cols-2">
              <div className="flex justify-end px-20 my-5 col-span-1 font-medium mx-152 overflow-hidden text-ellipsis max-w-full">Hello,{firstName}</div>
              <div className="bg-gray-200 rounded-full w-8 h-8 col-span-1 mx-80 my-4 text-black text-center"><div className="my-1">{firstName.charAt(0).toUpperCase()}</div></div>
              </div>
             </div>
        </div>
        <div className="p-5 font-semibold text-xl">
            <div>Your Balance ${balance}</div>
        </div>
        <div className="p-6 py-1 font-semibold text-xl">
            <div>Users</div>
        </div>
        <div>
            <div className="border border-gray-200 p-2 m-4 my-2 rounded-md">
                <input type="text" placeholder="Search users..." onChange={(e) => setSearch(e.target.value)} className="w-full outline-sky-400"/>
            </div>
        </div>
        <div>
        </div>
      {users.map((user) => (
        <div key={user._id} className="grid grid-cols-2 p-2 py-3 my-3 gap-y-2">
          <div className="flex items-center p-2">
            <div className="bg-gray-100 rounded-full w-10 h-10 mx-3 p-2 font-medium px-4">
              {user.firstName.charAt(0).toUpperCase()}
            </div>
            <div className="font-semibold">{user.firstName} {user.lastName}</div>
          </div>
          <div className="flex justify-end items-center p-2">
            <button className="bg-black text-white p-2 rounded-md" onClick={() => navigate('/send', { state: { toUserId: user._id,   // use _id
    toUserName: user.firstName // just for display
   } })}
           
            >
              Send Money
            </button>
            
          </div>
        </div>
      ))}

</div>
}