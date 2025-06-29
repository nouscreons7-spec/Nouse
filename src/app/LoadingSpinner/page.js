"use client";

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full w-full p-10">
      <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
