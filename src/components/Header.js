import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO } from "../utils/constants.js";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user login
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);



  return (
    <div className="absolute w-screen bg-gradient-to-b from-black w-100 z-10 flex justify-between px-8">
      <img className="w-44" src={LOGO} alt="" />

      {user && <div className="flex p-2">
        <img
          className="size-12"
          src={user?.photoURL} alt="alt" />
        <button onClick={handleSignOut} className="font-bold text-white">sign out</button>
      </div>}
    </div>

  )
}

export default Header