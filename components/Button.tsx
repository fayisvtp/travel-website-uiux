import Image from 'next/image';
import React from 'react'
type ButtonProps = {
    type:'button' | 'submit';
    tittle : string;
    icon? : string;
    variant:string;
    full?: boolean
}
const Button = ({type,tittle,icon,variant,full}:ButtonProps) => {
  return (
   <button className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
   type={type}
   >
    {icon && <Image src={icon} alt={tittle} width={24} height={24}/>}
    <label className='bold-16 whitespace-nowrap cursor-pointer'>{tittle}</label>
   </button>
  )
}

export default Button
