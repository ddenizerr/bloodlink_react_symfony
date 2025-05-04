import React from "react";
import {useLocation} from "react-router-dom";
import Alert from '../../components/ui/Alert';

const Home: React.FC = () => {
    const location = useLocation();
    const message = location.state?.message;

    return (
        <>
        <div className="p-6">
            {message && <Alert colour="green">{message}</Alert>}
            <h1 className="text-2xl font-bold"> Welcome to bloodlink </h1>
            <p className="mt-2 text-gray-600">This is the homepage. Feel free to explore.</p>
        </div>
        </>
    )

}

export default Home;