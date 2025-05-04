import React, {ReactNode} from "react";
import {Outlet, Link} from "react-router-dom";

const Layout = ({children, className}: { children?: ReactNode, className?: string }) => {
    return (
        <>
            <div className={`relative min-h-screen flex flex-col bg-gray-100 ${className || ''}`}>

                <header
                    className=" sticky top-0 bg-white shadow p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50">

                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-semibold text-left"> <span
                            className="text-red-600">blood</span><span>link</span></Link>
                    </div>

                    <nav className=" flex-grow flex justify-center gap-8 text-sm font-medium text-gray-600">
                        <Link to="/coming-soon" className="hover:text-red-500 transition-colors"> Coming Soon </Link>
                        <Link to="/" className="hover:text-red-500 transition-colors"> Home </Link>
                        <Link to="/about" className="hover:text-red-500 transition-colors"> About </Link>
                        <Link to="/donation-requests" className="hover:text-red-500 transition-colors"> Donation Requests </Link>
                    </nav>

                    {/* Right: Placeholder */}

                    <div className="flex-shrink-0 text-right">
                        <Link to="/login" className="hover:text-red-500 transition-colors"> Login or Register </Link>
                    </div>

                </header>

                <main className="flex-grow w-full">
                    <Outlet/>
                </main>


                <footer className="bg-gray-200 text-center flex flex-col md:flex-row p-2 text-sm text-gray-600 gap-2">

                    <div className="flex-grow flex justify-center">  bloodlink &copy; 2025. All rights reserved. </div>
                    <a
                        href="https://github.com/ddenizerr" // Replace with your actual GitHub URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/ddenizer" // Replace with your actual LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        LinkedIn
                    </a>
                </footer>
                {/* Watermark */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none h-[150px]">
                    <h1 className="text-[15vw] font-extrabold text-red-300 tracking-widest uppercase bg-gradient-to-t from-transparent via-red-300 to-red-300 bg-clip-text text-transparent">
                        BloodLink
                    </h1>
                </div>

            </div>
        </>);
};

export default Layout;