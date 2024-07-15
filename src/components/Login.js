import { useRef, useState } from "react"
import Header from "./Header"
import { chackValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { USER_AVATAR } from "../utils/constants.js";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch();


    const togleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    };
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);
    const handleClickButton = () => {
        const message = chackValidData(email.current.value, password.current.value);
        setErrorMessage(message)
        if (message) return;

        // sign in or signup logic here now

        if (!isSignInForm) {
            // sin up logic here

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + '-' + errorMessage);
                });

        } else {
            // sign in logic here

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                  
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                })
        }
    }
    return (
        <div className="flex flex-col h-screen overflow-hidden ">
            <Header />
            <div className="">
                <img className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="" />
            </div>
            <form action="" className="p-8 absolute bg-black w-3/12 my-2 bg-opacity-80" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }} onSubmit={(e) => e.preventDefault()}>
                <h1 className="text-white  p-6  text-6xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input type="text" ref={name} placeholder="Name" className="p-6  my-7 block w-full text-3xl bg-gray-700 text-gray text-white" />)}
                <input type="text" ref={email} placeholder="Email" className="p-6  my-10 block w-full text-3xl bg-gray-700 text-gray text-white" />
                <input ref={(password)} type="password" placeholder="Password" className="p-6  block w-full my-10 text-4xl bg-gray-700 text-white" />
                <p className="p-3 m-3 text-red-500 font-bold text-4xl">{errorMessage}</p>
                <button className="p-4 my-6 text-white text-4xl bg-red-700 rounded-lg w-full" onClick={handleClickButton}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 text-white text-4xl " ><span className="text-bold cursor-pointer" onClick={togleSignInForm}>{isSignInForm ? "New to Netflix ? sign up now" : "Already Registered Sign in now"}</span></p>
            </form>
        </div>

    )
}

export default Login