import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'; /*add a opção de verificação e estipular default*/

export interface HeadingProps { /*tipos de tamanho para os HeadingOS*/
  size?: 'sm' | 'md' | 'lg'; /*size? = opcional*/
  children : ReactNode; /* Headingo que receberá */ 
  asChild?: boolean; /*tag*/
}

/*default = md*/
export function Heading({ size = 'md', children, asChild }: HeadingProps) /*recebe o size*/
{
  /*se tiver asChild, usa asChild, se não usa span*/
  const Comp = asChild ? Slot : 'h2'; 

  return (
    <Comp className={clsx(
      'Heading-gray-100 font-bold font-sans', /*default*/
      {
        'Heading-lg' : size == 'sm',
        'Heading-xl' : size == 'md',
        'Heading-2xl' : size == 'lg',
      }
    )}    
      /*{children}  = imprimi Headingo*/
    >
      {children} 
    </Comp>
  )
}