import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">Currency Converter</h1>
            <p className="mt-2">Convert between different currencies using real-time exchange rates.</p>
        </header>
    );
};

export default Header;