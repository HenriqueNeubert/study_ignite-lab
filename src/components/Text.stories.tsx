import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default { /*cria uma 'categoria' no storybook*/
  title: 'Components/Text',/*categoria/subcategoria*/
  component: Text, /*recebe text, que vem de Text.tsx*/
  args:{
    children: 'Lorem Ipsum',
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

export const Default: StoryObj<TextProps> = {} /*variação*/

export const Small: StoryObj<TextProps> = {
  args:{
    size: 'sm'
  }
} /*variação*/

export const Large: StoryObj<TextProps> = {
  args:{
    size: 'lg'
  }
} /*variação*/

export const CustomComponent: StoryObj<TextProps> = {
  args:{
    asChild: true, 
    children: <p>Text with p</p>
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