import React from "react";

const Home = () => {
    return ( 
        <div>
            <section className="px-2 py-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">Welcome to the new</span>
                            <span className="block text-indigo-600 xl:inline">Internet Banking</span>
                        </h1>
                        <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Your banking team is at your phone</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                            <img src="https://i.pinimg.com/736x/01/30/ef/0130efbe385e48a299dbf9b6741b8e5c.jpg"/>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Home;