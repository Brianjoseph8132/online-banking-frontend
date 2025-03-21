import React from "react";


const About = () => {
    return ( 
        <div>
            <div className="sm:flex flex-col max-w-screen-xl mx-auto">
                {/* About Us Section */}
                <div className="sm:flex items-center py-16 px-4 sm:px-6 lg:px-8">
                    <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.pinimg.com/736x/8d/72/7a/8d727a99a17abc9b564b5fac77cd0594.jpg" alt="Helpdesk Image" />
                    </div>
                    </div>
                    <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About Us</span>
                        <h2 className="my-4 font-bold text-3xl sm:text-4xl">The Future of online Banking with<span className="text-indigo-600">Supreme</span></h2>
                        <p className="text-white-700">
                        At <span className="font-semibold text-indigo-600">Supreme</span>, we are redefining the way you bank by combining innovation, security, and convenience. Our digital-first approach ensures that you have full control over your finances anytime, anywhere. With cutting-edge security measures, seamless transactions, and a user-friendly interface, banking with Supreme is effortless and secure.

                        Whether you're managing daily expenses, making investments, or sending money globally, Supreme provides the tools and support you need.
                        </p>
                        <p className="text-white-700 mt-4">
                        Experience the future of online banking—efficient, reliable, and designed for you.
                        </p>
                    </div>
                    </div>
                </div>

                {/* Location Section with Helpdesk Information */}
                <section className="bg-gray-100">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Contant Us</h2>
                        <p className="mt-4 text-lg text-gray-500">Join Supreme today and experience the future of online banking!</p>
                    </div>
                    <div className="mt-16 lg:mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            {/* You can replace the iframe source with an internal link to your helpdesk app or showcase how it works */}
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                            width="100%" height="480" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                            <div className="px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Bank Smarter with Supreme</h3>
                                <p className="mt-1 text-gray-600">
                                 At Supreme, we’re revolutionizing online banking by making it faster, safer, and more convenient.
                                </p>
                                <p className="mt-1 text-gray-600">
                                 Whether you're managing your daily finances, making secure transactions, or planning for the future, our digital banking platform is designed to give you full control—anytime, anywhere.
                                </p>
                            </div>
                            <div className="border-t border-gray-200 px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Why Choose Supreme?</h3>
                                <ul className="mt-1 text-gray-600 space-y-2">
                                <li>💳 Seamless transactions – Transfer funds instantly and securely</li>
                                <li>🔒 Advanced security – Your data and funds are always protected</li>
                                <li>📊 Smart financial tools – Track expenses, save efficiently, and invest with confidence</li>
                                <li>📱 24/7 access – Bank from any device, anytime</li>
                                </ul>
                            </div>
                            <div className="border-t border-gray-200 px-6 py-4">
                                <h3 className="text-lg font-medium text-gray-900">Get In Touch</h3>
                                <p className="mt-1 text-gray-600">📧 Email: support@supremebank.com</p>
                                <p className="mt-1 text-gray-600">📞 Phone: +1 800-987-6543</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default About;