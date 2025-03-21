import React from "react";

const Footer = () => {
    return ( 
        <div>
         <footer class="bg-white-200 py-8 px-4 shadow-md z-10 flex justify-content-center align-items-center dark:bg-indigo-900 dark:text-white">
            <div class="text-sm text-gray-600 dark:text-gray-300">Copyright © 2023 Supreme Bank</div>
            <div class="flex ml-auto gap-4">
                <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">Terms &
                    Conditions
                </a>
                <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">Privacy
                    Policy
                </a>
            </div>
        </footer>
        </div>
     );
}
 
export default Footer;