import React from 'react';

interface ErrorProps {
    message: string;
  }
  
const Error = ({ message }: ErrorProps) => {

  return (
    <div className="error">
      <p>Error: {message}</p>
    </div>
  );
};

export default Error;