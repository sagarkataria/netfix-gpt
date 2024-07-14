import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store =>store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black w-100 z-10 flex justify-between px-8">
       <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt=""/>

       {user&&<div className="flex p-2">
         <img 
         className="size-12"
         src={user?.photoURL} alt="alt"/>
         <button onClick={handleSignOut} className="font-bold text-white">sign out</button>
      </div>}
    </div>
    
  )
}

export default Header