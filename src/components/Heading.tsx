import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'; /*add a opção de verificação e estipular default*/

export interface HeadingProps { /*tipos de tamanho para os HeadingOS*/
  size?: 'sm' | 'md' | 'lg'; /*size? = opcional*/
  children : ReactNode; /* Headingo que receberá */ 
  asChild?: boolean; /*tag*/
  className?: string; 
}

/*default = md*/
export function Heading({ size = 'md', children, asChild, className }: HeadingProps) /*recebe o size*/
{
  /*se tiver asChild, usa asChild, se não usa span*/
  const Comp = asChild ? Slot : 'h2'; 

  return (
    <Comp className={clsx(
      'text-gray-100 font-bold font-sans', /*default*/
      {
        'text-lg' : size == 'sm',
        'text-xl' : size == 'md',
        'text-2xl' : size == 'lg',
      },
      className 
    )}    
      /*{children}  = imprimi Heading*/
    >
      {children} 
    </Comp>
  )
}