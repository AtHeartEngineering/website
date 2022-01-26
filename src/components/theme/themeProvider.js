import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider, Global, css } from '@emotion/react';

import { darkTheme } from './index';
import Header from '../Header';
import { baseStyles } from '../styles/GlobalStyles';

class ThemeProvider extends React.Component {

  render() {
    const { children, location } = this.props;


    return (
      <>
        <Global styles={[baseStyles]} />
        <Header
          location={location}
        />
        <EmotionThemeProvider theme={darkTheme}>{children}</EmotionThemeProvider>
      </>
    );
  }
}

export default ThemeProvider;
