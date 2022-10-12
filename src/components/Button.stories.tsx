import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default { /*cria uma 'categoria' no storybook*/
  title: 'Components/Button',/*categoria/subcategoria*/
  component: Button, /*recebe text, que vem de Text.tsx*/
  args:{
    children: 'Clique aqui',
  },
  argTypes: {}

} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {} /*variação*/
