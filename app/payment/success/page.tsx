import React from 'react';

function PaymentSuccess() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <svg className="mx-auto mb-4 w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h2 className="mb-4 text-3xl font-bold text-gray-800">Payment Successful!</h2>
                <p className="mb-8 text-gray-500">Thank you for purchasing the course. You will receive an email with course access details shortly.</p>
                <a href="/" className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    Go to Dashboard
                </a>
            </div>
        </div>
    );
}

export default PaymentSuccess;