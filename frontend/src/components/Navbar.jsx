import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {

    const { logout, current_user } = useContext(UserContext);
    return ( 
        <div>
            <header className="sticky top-0 z-50 bg-white  shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-4">
                        <img
                        src="https://images.unsplash.com/photo-1598520106830-8c45c2035460"
                        alt="Supreme Banking"
                        className="h-10 w-auto"
                        />
                        <h1 className="text-xl font-bold">Supreme Banking</h1>
                    </Link>

                    {
                        current_user ? (
                            <>
                                <nav className="hidden md:flex items-center space-x-6">
                                    <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                                    <Link to="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Dasboard</Link>
                                    <Link to="transaction" className="hover:text-blue-600 dark:hover:text-blue-400">Transaction</Link>
                                    <Link to="/create" className="hover:text-blue-600 dark:hover:text-blue-400">Create Account</Link>
                                    <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                                </nav>

                                <div className="flex items-center space-x-4">
                                    <Link 
                                        onClick={logout}
                                        to="/signin" 
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                        Logout
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                Login
                                </Link>
                                <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                                Sign Up
                                </Link>
                            </div>
                        )
                    }

                </div>
            </header>
        </div>
     );
}
 
export default Navbar;
