import React from "react";
import AuthCardHeader from "./AuthCardHeader";

const SignInForm = ({onFlip}: {onFlip:() => void}) => {

    return (
        <div>
            <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm saturate-150'>
                <AuthCardHeader title={'Sign in into your account'}/>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email
                                address</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" autoComplete="email" required
                                       className="block w-full rounded-md bg-white border border-red-800 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-grey-600 hover:text-red-500">Forgot
                                        password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input type="password" name="password" id="password" autoComplete="current-password"
                                       required
                                       className="block w-full rounded-md bg-white border border-red-800 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                    className="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <button onClick={onFlip}><span className='font-semibold text-red-800 sm:text-grey-600 hover:text-red-500'> Register!</span></button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;