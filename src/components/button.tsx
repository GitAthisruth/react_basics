import React from 'react'

interface Props {
    children:string;
    color?: 'primary'|'secondary'|'danger';
    //color?: string; // question mark given for optional property.
    onClick: () => void; //The void keyword in TypeScript is used to specify that a function does not return any value.

}

const Button = ({children,onClick,color}:Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button;