import '../packages/terra/lib/stylesheets/fonts.less'
import '../packages/terra/lib/stylesheets/typography.less'
import './main.less'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
