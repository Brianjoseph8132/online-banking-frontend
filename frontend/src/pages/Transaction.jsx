import React, { useContext, useState } from "react";
import { AccountContext } from "../context/AccountContext";
import { UserContext } from "../context/UserContext";



const Transaction = () => {

    const {addTransactions} = useContext(AccountContext)
    const {current_user} = useContext(UserContext)

    const [amount, setAmount] = useState('');
    const [action, setAction] = useState('');
    const [pin, setPin] = useState('');

    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        
          // Enter your details
          await addTransactions(amount, action, pin)
    
          // Reset form fields
          setAmount('');
          setAction('');
          setPin('')
        
    
      };

    return ( 
        <div>
            {/* if the user is not the current user to show a message of not authorised */}
            {!current_user ? "Not Authorized":(

                <div className="flex items-center justify-center min-h-screen ">
                    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
                        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Transaction</h1>
                        <form 
                        onSubmit={handleSubmit}
                        >
                            <div>
                                <label  className="block text-sm font-medium text-gray-600">
                                    Action
                                </label>
                                <select 
                                    id="action"
                                    onChange={(e) => setAction(e.target.value)} 
                                    value={action}
                                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                    required
                                >   
                                 {/* select if you what to deposit or withdraw */}
                                    <option value="">Select</option>
                                    <option>deposit</option>
                                    <option>withdraw</option>
                                </select>
                            </div>

                            {/* The amount the user wants to deposit or withdraw*/}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Amount</label>
                                <input
                                type="number"
                                id="amount"
                                name="amount"
                                value={amount}
                                onChange={(e) =>setAmount(e.target.value)}
                                placeholder="Amount"
                                className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                required
                                />
                            </div>
                            <div className="mb-4">
                                <label for="cardholder-name" className="block text-sm font-medium text-gray-700">Pin</label>
                                <input
                                type="number"
                                id="pin"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                name="pin"
                                placeholder="Enter your pin"
                                className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                required
                                />
                            </div>

                            <div>
                                <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
                                >
                                Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            
        </div>
     );
}
 
export default Transaction;