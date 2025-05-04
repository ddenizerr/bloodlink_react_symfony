import React, {useState} from "react";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LogInForm";


const AuthCard = () => {


    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="card-container ">
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                <div className="card-face card-front">
                    <LogInForm onFlip = {() => setIsFlipped(true)}/>
                </div>
                <div className="card-face card-back">
                    <RegisterForm onFlip = {() => setIsFlipped(false)}/>
                </div>
            </div>
        </div>
    );
}

export default AuthCard;