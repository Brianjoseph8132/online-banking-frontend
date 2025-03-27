import React, { useContext, useState } from "react";
import { AccountContext } from "../context/AccountContext";
import { useNavigate } from "react-router-dom";



const Create = () => {

    const {createAccount} = useContext(AccountContext)


    const [initialDeposit, setInitialDeposit] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        (e).preventDefault();

        
        createAccount(initialDeposit); 

      // Reset form fields
      setInitialDeposit('');
      navigate("/dashboard")
    }


    return ( 
        <div>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
                    <h1 className="text-2xl font-semibold mb-4 text-gray-800">Initial Deposit</h1>
                    <form 
                      onSubmit={handleSubmit}
                      >
                        <div className="mb-4">
                            <label for="card-number" className="block text-sm font-medium text-gray-700">Amount</label>
                            <input
                            type="text"
                            id="amount"
                            name="amount"
                            value={initialDeposit}
                            onChange={(e) => setInitialDeposit(e.target.value)}
                            placeholder="initial deposit"
                            className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            required
                            />
                        </div>
                    <div>
                        <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Create;