import "../src/index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleSignUpClick = () => {
    navigate("/SignUp");  
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-500">
      <div className="signin bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="example@gmail.com"
              className="rounded-lg p-2 m-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="rounded-lg p-2 m-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
          <button
            type="button"  
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 mt-4"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
