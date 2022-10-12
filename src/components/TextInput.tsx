import { ReactNode } from 'react';
import { clsx } from 'clsx'; /*add a opção de verificação e estipular default*/

export interface TextInputProps { /*tipos de tamanho para os ButtonOS*/
}

/*default = md*/
export function TextInput({}: TextInputProps) /*recebe o size*/
{
  return (
    <input className={clsx(
      'py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 w-full', /*default*/
    )}    
    />
  )
}