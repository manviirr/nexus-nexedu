import React from 'react';

function PaymentError() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <svg className="mx-auto mb-4 w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <h2 className="mb-4 text-3xl font-bold text-gray-800">Payment Failed</h2>
                <p className="mb-8 text-gray-500">We encountered an issue processing your payment. Please try again or contact support for assistance.</p>
                <a href="/" className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    Try Again
                </a>
            </div>
        </div>
    );
}

export default PaymentError;
