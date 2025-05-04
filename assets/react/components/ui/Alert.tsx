import React from "react";

type AlertProps = {
    colour?: 'red' | 'green' | 'blue' | 'yellow';
    children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ colour = 'red', children }) => {
    const colourStyles = {
        red: {
            bg: 'bg-red-100',
            text: 'text-red-800',
            border: 'border-red-800'
        },
        green: {
            bg: 'bg-green-100',
            text: 'text-green-800',
            border: 'border-green-300'
        },
        blue: {
            bg: 'bg-blue-100',
            text: 'text-blue-800',
            border: 'border-blue-300'
        },
        yellow: {
            bg: 'bg-yellow-100',
            text: 'text-yellow-800',
            border: 'border-yellow-300'
        }
    };

    const selected = colourStyles[colour];

    return (
        <div className={`border rounded mb-5 px-4 py-3 relative ${selected.bg} ${selected.text} ${selected.border}`} role="alert">
            <span className="block sm:inline text-sm">{children}</span>
        </div>
    );
};

export default Alert;