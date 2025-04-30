import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to PayClone</h1>
        <p className="text-gray-600 mb-6">Transfer money seamlessly and securely.</p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
          alt="wallet"
          className="w-24 h-24 mx-auto mb-6 animate-bounce"
        />

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition"
          >
            New here? Sign Up
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition"
          >
            Already in crew? Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
