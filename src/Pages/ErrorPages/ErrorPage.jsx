

import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
      return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="text-center max-w-lg mx-auto p-10 bg-base-100 rounded-3xl shadow-2xl border border-base-300">
        <h1 className="text-7xl font-extrabold mb-4 text-primary">404</h1>

        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>

        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or was moved.
        </p>

       <Link to='/'  className="btn btn-primary mt-4 shadow-lg">
       Go Back Home
       </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

