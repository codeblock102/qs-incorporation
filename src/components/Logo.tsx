import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex flex-col">
        <span className="font-montserrat text-2xl font-bold tracking-wider">QS</span>
        <span className="font-montserrat text-xs tracking-widest uppercase -mt-1">Incorporation</span>
      </div>
    </div>
  );
};

export default Logo;