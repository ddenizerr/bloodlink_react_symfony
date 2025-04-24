import React from "react";
import Layout from "./components/Layout/Layout";
import AuthCard from "./components/Authentication/AuthCard";
import '../styles/components/auth-card.css';

const App = () => {
    return (
        <Layout>
            <AuthCard/>
        </Layout>
    );
}

export default App;