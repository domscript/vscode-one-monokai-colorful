// @ts-ignore
import * as React from 'react'; // @ts-ignore
import PropTypes from 'prop-types'; // @ts-ignore
import {ThemeProvider} from 'emotion-theming'; // @ts-ignore
import HintOfLace from './components/HintOfLace'; // @ts-ignore
import theme from './theme';

const Fashion = ({cise, lipgloss}) => {
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
        cise={cise}
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

const hi = 'Hello';

const mySet = new Set();

// @ts-ignore
// prettier-ignore
const array = new Array(undefined, typeof null, NaN !== NaN, {} !== {}, true,
// prettier-ignore
  "string", !!'string', new Intl.Locale('en'), `string ${hi} ${'you'}`,
  ~~3.4, 10n, -0 != 0, Infinity, typeof Symbol, [] instanceof Object, (async () => await this)()
);

const [...rest] = [...array];
