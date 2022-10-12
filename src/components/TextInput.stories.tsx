import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'

export default { /*cria uma 'categoria' no storybook*/
  title: 'Components/TextInput',/*categoria/subcategoria*/
  component: TextInput, /*recebe text, que vem de Text.tsx*/
  args:{},
  argTypes: {}

} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {} /*variação*/
