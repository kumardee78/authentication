import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
 const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      navigate("/");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex  shadow-lg shadow-blue-900 w-[70%] h-[18rem] mx-auto my-32 bg-white">
      <div className="w-[40%] flex items-center justify-center ">
        <div className="flex flex-col items-center">
          <FaRegUser className="text-5xl rounded-full border p-1" />
          <h1 className="text-3xl">Register</h1>
        </div>
      </div>

      <div className="w-[60%]">
        <div className="p-4">
          <h1 className="text-xl text-end bg-red-400 py-2 px-6 text-white">
            Register
          </h1>
          <form onSubmit={signup}>
            <br />
            <input
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="text"
              placeholder="Email"
              className="border p-1 w-[70%] mb-4"
            />
            <br />
            <input
              onChange={(e) => setPass(e.currentTarget.value)}
              type="password"
              placeholder="Password"
              className="border p-1 w-[70%] mb-4"
            />
            <br />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-1 rounded-md"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
