import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


const Signin = () => {

    const {login, login_with_google} = useContext(UserContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  // ====> To Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

   login(email, password)

  };

  function handleGoogleLogin(credential){
    try{
      const user_details = jwtDecode(credential)
      login_with_google(user_details.email)
      toast.success("Login success!")
      navigate("/")
    }
    catch(error){
      toast.error("Google sign in failed")
    }
  }


    return ( 
        <div>
          <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div
                className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
              </div>
              <form onSubmit={handleSubmit} className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-2xl font-semibold">Login</h1>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input  
                        id="email" 
                        name="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" 
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                      </div>
                      <div className="relative">
                        <input 
                        id="password" 
                        name="password"
                        value={password} 
                        onChange = {(e) => setPassword(e.target.value)}
                        type="password" 
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
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

                <GoogleLogin className="w-full flex justify-center"
                onSuccess={credentialResponse => {
                  handleGoogleLogin(credentialResponse.credential)
                  
                }}
                onError={() => {
                  console.log('Login Failed')
                }}
                useOneTap
              />
                
                <br />
                <div className="text-center text-sm text-gray-600 mt-4">
                  Don't have an account? <Link to="/signup" className="text-indigo-500 hover:underline">Sign up</Link>
                </div>


              </form>
            </div>
          </div>
        </div>
     );
}
 
export default Signin;