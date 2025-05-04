import React from "react";

const ComingSoon = () =>{

    return (
        <div className="min-h-screen flex flex-col justify-between px-6 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-gradient-to-bl from-red-100 via-white to-purple-100">
          <div className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-12 text-left lg:text-left">

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-8 lg:text-left">
                🩸 <span className="text-red-600">blood</span><span>link</span>
              </h1>
              <p className="italic text-base sm:text-lg md:text-xl text-gray-700 mb-6 lg:text-left">
                Connecting lives, one drop at a time.
              </p>

              <p className="w-full max-w-2xl text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-6 lg:text-left">
                <span className="text-red-600">blood</span><span>link</span> is an upcoming platform designed to simplify and accelerate the process of
                finding and connecting with blood donors during emergencies.
                <br /><br />
                Built with <strong>React</strong> and <strong>PHP</strong>, it will allow users to register,
                post urgent requests, and receive real-time updates.
              </p>
            </div>

            <div className="w-full max-w-md flex items-end justify-end flex-col text-right">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 text-right">Get notified when we launch</h2>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                    Notify Me
                </button>
              </form>
            </div>

          </div>
        </div>

    );
};

export default ComingSoon;