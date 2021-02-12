/**
 * Here's a link for the theme object with the default values provided by MUI.
 * https://material-ui.com/customization/default-theme/#default-theme
 */

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import palette from './palette.theme';
import typography from './typography.theme';
import generic from './generic.theme';
import mixins from './mixins.theme';
// Change the default props of a Material-UI component
import muiDefaultProps from './muiDefaultProps.theme';
// Change every single style injected by Material-UI in an Mui component
import muiStylesOverrides from './muiStylesOverrides.theme';

const theme = createMuiTheme({
  palette,
  typography,
  mixins,
  props: muiDefaultProps,
  overrides: {
    ...muiStylesOverrides,
    MuiCssBaseline: {
      '@global': generic,
    },
  },
  shape: {
    borderRadius: 5.87,
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
  },
});

export default responsiveFontSizes(theme);
