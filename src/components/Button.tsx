import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'; /*add a opção de verificação e estipular default*/
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { /*tipos de tamanho para os ButtonOS*/
  children : ReactNode; /* Buttono que receberá */ 
  asChild?: boolean; /*tag*/
}

/*default = md*/
export function Button({ children, asChild, className, ...props }: ButtonProps) /*recebe o size*/
{
  /*se tiver asChild, usa asChild, se não usa span*/
  const Comp = asChild ? Slot : 'button'; 

  return (
    <Comp className={clsx(
      'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-black', /*default*/
      className,
      )}    
      {...props}
    >
      {children} 
    </Comp>
  )
}