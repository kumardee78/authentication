import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.currentUser == null) {
      navigate("/signup");
    }
    else navigate("/")
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="py-20 w-[60%] mx-auto shadow-lg bg-gray-600 my-20">
      <h1 className="text-center text-4xl text-white">welcome user!</h1>
      {auth.currentUser ? (
        <div className="my-4 text-center">
          <p className="text-white m-6">{auth.currentUser.email}</p>
          <button onClick={logout} className="bg-red-500 px-6 py-1 text-white">
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
