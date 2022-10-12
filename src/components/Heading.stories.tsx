import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default { /*cria uma 'categoria' no storybook*/
  title: 'Components/Heading',/*categoria/subcategoria*/
  component: Heading, /*recebe text, que vem de Text.tsx*/
  args:{
    children: 'Title Lorem Ipsum',
    size: 'md',
  },
  argTypes: {
    size:{
      options: ['sm', 'md', 'lg'],
      control:{
        type: 'inline-radio'
      }
    }
  }

} as Meta<TextProps>

export const Default: StoryObj<HeadingProps> = {} /*variação*/

export const Small: StoryObj<HeadingProps> = {
  args:{
    size: 'sm'
  }
} /*variação*/

export const Large: StoryObj<HeadingProps> = {
  args:{
    size: 'lg'
  }
} /*variação*/

export const CustomComponent: StoryObj<HeadingProps> = {
  args:{
    asChild: true, 
    children: <h1>Heading with h1</h1>
  },
  argTypes:{
    children:{
      table:{
        disable: true,
      }
    },
    asChild:{
      table:{
        disable: true,
      }
    }
  }
} /*variação*/