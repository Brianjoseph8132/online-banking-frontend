import React from "react";


const Transaction = () => {
    return ( 
        <div>
            <div class="flex items-center justify-center min-h-screen ">
                <div class="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
                    <h1 class="text-2xl font-semibold mb-4 text-gray-800">Enter Card Information</h1>
                    <form action="#" method="POST">
                    
                    <div class="mb-4">
                        <label for="cardholder-name" class="block text-sm font-medium text-gray-700">Cardholder Name</label>
                        <input
                        type="text"
                        id="cardholder-name"
                        name="cardholder-name"
                        placeholder="John Doe"
                        class="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        required
                        />
                    </div>

                    
                    <div class="mb-4">
                        <label for="card-number" class="block text-sm font-medium text-gray-700">Card Number</label>
                        <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        placeholder="1234 5678 9012 3456"
                        class="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                        required
                        maxlength="19"
                        />
                    </div>

                    
                    <div class="flex gap-4">
                        
                        <div class="mb-4 w-1/2">
                        <label for="expiry-date" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input
                            type="text"
                            id="expiry-date"
                            name="expiry-date"
                            placeholder="MM/YY"
                            class="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            required
                            maxlength="5"
                        />
                        </div>

                        
                        <div class="mb-4 w-1/2">
                        <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            class="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                            required
                            maxlength="3"
                        />
                        </div>
                    </div>

                    
                    <div>
                        <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
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
 
export default Transaction;