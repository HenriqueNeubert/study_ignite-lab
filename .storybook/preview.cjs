import { themes } from '@storybook/theming'
import '../src/styles/global.css' /*para o storybook receber os arquivos vindo do tailwind*/

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /*altera o restante do tema para dark*/
  docs:{
    theme: themes.dark,
  },
}