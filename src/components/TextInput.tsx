import React, { Children, InputHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{ /*tipos de tamanho para os ButtonOS*/
  placeholder?: string
}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputProps) {
  return (
    <div className="flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  Children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return(
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}  

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}


function TextInputInput(props: TextInputProps) /*recebe o size*/
{
  return (    
    <input className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"  
    {...props}  
    />
  )
} 

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}