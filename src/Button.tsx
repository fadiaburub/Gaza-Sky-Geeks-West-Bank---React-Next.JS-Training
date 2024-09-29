//Button.tsx
import React from 'react';

interface ButtonProps {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color = 'primary' }) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
