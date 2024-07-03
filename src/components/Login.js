import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true)
    const togleSignInForm = () => {
         setIsSignInForm(!isSignInForm)
    };
    return (
        <div className="flex flex-col h-screen overflow-hidden ">
            <Header />
            <div className="">
                <img className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="" />
            </div>
            <form action="" className="p-8 absolute bg-black w-3/12 my-2 bg-opacity-80" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1 className="text-white  p-6  text-6xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm&&(<input type="text" placeholder="Name" className="p-6  my-7 block w-full text-3xl bg-gray-700 text-gray"/>)}
                <input type="text" placeholder="Email" className="p-6  my-10 block w-full text-3xl bg-gray-700 text-gray"/>
                <input type="password" placeholder="Password" className="p-6  block w-full my-10 text-4xl bg-gray-700"/>
                <button className="p-4 my-6 text-white text-4xl bg-red-700 rounded-lg w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 text-white text-4xl " ><span className="text-bold cursor-pointer" onClick={togleSignInForm}>{isSignInForm?"New to Netflix ? sign up now":"Already Registered Sign in now"}</span></p>
            </form>
        </div>

    )
}

export default Login