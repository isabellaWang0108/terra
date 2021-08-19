module.exports = {
  stories: ['../packages/terra/lib/**/*.stor@(y|ies).@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  refs: {
    viewthespace: {
      title: 'VTS Core Design System',
      url: 'https://design-system.vts.com',
    },
    /*
    marketplace: {
      title: 'Marketplace Design System',
      url: 'https://design-system.truva.com',
    },
    */
  },
}
