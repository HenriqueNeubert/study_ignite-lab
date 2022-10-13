import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react';  
import { TextInput, TextInputRootProps } from './TextInput'

export default { /*cria uma 'categoria' no storybook*/
  title: 'Components/TextInput',/*categoria/subcategoria*/
  component: TextInput.Root, /*recebe text, que vem de Text.tsx*/
  args:{
    children: [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder="Type your e-mail address"/>    
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }

} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {} /*variação*/

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args:{
    children: <TextInput.Input placeholder="Type your e-mail address"/>     
  }
} /*variação*/
