import { create } from '@storybook/theming';
import Logo from '../packages/terra/lib/assets/Global/logo.svg'

export default create({
  base: 'light',
  colorPrimary: '#140532',
  colorSecondary: '#8C82FF',
  brandTitle: 'Terra Design System',
  brandImage: Logo,
   // UI
   appBg: 'white',
   appContentBg: 'white',
   appBorderColor: '#8C82FF',
   appBorderRadius: 12,

 
  // Typography
  fontBase: 'sans-serif',
  fontCode: 'monospace',

   // Toolbar default and active colors
   barTextColor: '#140532',
   barSelectedColor: '#5528ff',
   barBg: 'white',
});