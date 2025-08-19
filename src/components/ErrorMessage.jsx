import React from "react";

const ErrorMessage = ({ message }) => (
  <div
    className="mt-6 bg-red-50 border-l-4 border-red-500 text-red-800 p-4 rounded-r-lg"
    role="alert"
  >
    <p className="font-bold">An Error Occurred</p>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
