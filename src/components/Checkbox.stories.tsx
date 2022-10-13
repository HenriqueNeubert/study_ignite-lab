import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default { /*cria uma 'categoria' no storybook*/
  title: 'Components/Checkbox',/*categoria/subcategoria*/
  component: Checkbox, /*recebe text, que vem de Text.tsx*/
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {} /*variação*/
