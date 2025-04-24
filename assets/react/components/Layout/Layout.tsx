import React, {ReactNode}  from "react";

const Layout = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`min-h-screen flex flex-col bg-gray-100 ${className || ''}`}>
            <header className="bg-white shadow p-4">BloodLink 🩸</header>

            <main className="flex-grow w-full max-w-sm mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="bg-gray-200 text-center p-2 text-sm text-gray-600">
                &copy; 2025 BloodLink. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;