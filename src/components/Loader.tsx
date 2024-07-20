import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" />
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]" />
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]" />
    </div>
  );
};

export default Loader;
