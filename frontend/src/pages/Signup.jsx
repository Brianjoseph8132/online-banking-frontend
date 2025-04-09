import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const Signup = () => {

    const {addUser} = useContext(UserContext)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('')


    // ======= To Handle from Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password != repeatPassword)
        {
            alert("Password does not match")
        }

        addUser(username, email, password)
    };


    function signUpWithGoogle(token){  
        console.log("Sign up token:",token)
    
        const decoded = jwtDecode(token)
        addUser(decoded.given_name, decoded.email, password, decoded.picture)
        
        console.log(decoded)
    }

    return ( 
        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <form onSubmit = {handleSubmit}
                      className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
                      >

                        <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Sign Up</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input 
                                autoComplete="off" 
                                id="username" 
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                                type="text" 
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                placeholder=" Username" />
                                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                            </div>
                            <div className="relative">
                                <input 
                                autoComplete="off" 
                                id="email" 
                                name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text" 
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                placeholder="Email address" />
                                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div className="relative">
                                <input 
                                autoComplete="off" 
                                id="password" 
                                name="password"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" 
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                placeholder="Password" />
                                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div className="relative">
                                <input 
                                autoComplete="off" 
                                id="repeatpassword" 
                                name="repeatpassword"
                                value={repeatPassword} 
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                type="password" 
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                placeholder="Password" />
                                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Repeat Password</label>
                            </div>
                            <div className="relative">
                                <button className="bg-indigo-500 text-white rounded-md px-2 py-1">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="my-4 flex items-center gap-4">
                            <hr className="w-full border-gray-300" />

                            <p className="text-sm text-white-800 text-center">or</p>
                            <hr className="w-full border-gray-300" />
                        </div>

                        <div className="w-full flex justify-center">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                            signUpWithGoogle(credentialResponse.credential)
                            }}
                            onError={() => {
                            console.log('Login Failed')
                            }}
                            useOneTap
                        />
                        </div>
                        <br />

                        <div>
                         Already have an account? <Link to="/login" className="text-indigo-500">Login</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;