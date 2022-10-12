import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'; /*add a opção de verificação e estipular default*/

export interface TextProps { /*tipos de tamanho para os TEXTOS*/
  size?: 'sm' | 'md' | 'lg'; /*size? = opcional*/
  children : ReactNode; /* texto que receberá */ 
  asChild?: boolean; /*tag*/
}

/*default = md*/
export function Text({ size = 'md', children, asChild }: TextProps) /*recebe o size*/
{
  /*se tiver asChild, usa asChild, se não usa span*/
  const Comp = asChild ? Slot : 'span'; 

  return (
    <Comp className={clsx(
      'text-gray-100 font-sans', /*default*/
      {
        'text-xs' : size == 'sm',
        'text-sm' : size == 'md',
        'text-md' : size == 'lg',
      }
    )}    
      /*{children}  = imprimi texto*/
    >
      {children} 
    </Comp>
  )
}