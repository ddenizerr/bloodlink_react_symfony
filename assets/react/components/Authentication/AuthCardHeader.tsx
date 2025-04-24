import React from "react";

type AuthCardHeaderProps = {
    title: string;
}

const AuthCardHeader: React.FC<AuthCardHeaderProps> = ({title}) => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <span className="block text-center text-2xl mb-2 text-red-800 font-semibold">
        Bloodlink 🩸
      </span>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-red-800">
                {title}
            </h2>
        </div>
    );
};

export default AuthCardHeader;