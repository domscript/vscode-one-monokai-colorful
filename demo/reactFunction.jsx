import * as React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'emotion-theming';

import HintOfLace from './components/HintOfLace';
import theme from './theme';

export {theme};

const Fashion = ({jazzercise, lipgloss}, jjjjjj) => {
  const {state, setState} = React.useState({
    knowFashion: false,
    fashionIsFriend: false,
    posing: 'like a swan',
  });

  return (
    <ThemeProvider theme={theme}>
      <h1>Hey! He-hey-hey! Hey!</h1>
      <HintOfLace
        lipgloss={lipgloss}
        posing={state.posing}
        knowFashion={state.knowFashion}
        jazzercise={jazzercise}
        update={setState}
      />
    </ThemeProvider>
  );
};

Fashion.propTypes = {
  data: PropTypes.shape({
    jazzercise: PropTypes.string.isRequired,
    lipgloss: PropTypes.number.isRequired,
  }).isRequired,
};

export default Fashion;

const CONSTANT_PI = 3.141592653589793;
const CONSTANT_E = 2.718_281_828_4590;
const regexp = /ab+c/i;
let templateLiteral = `string ${regexp} ${'you'} ${CONSTANT_PI}`;
