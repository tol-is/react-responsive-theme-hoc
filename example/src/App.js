import React, { Component } from 'react';

// import theme provider and responsive theme hoc
import { ThemeProvider } from 'styled-components';
import withResponsiveTheme from 'react-responsive-theme-hoc';

// presentation components
import { Global, MainWrap, TitleList, TitleListItem } from './components/layout';
import { TitleButton } from './components/type';

// constants
import theme from './constants/theme';
import locale from './constants/locale.json';

const ResponsiveThemeProvider = withResponsiveTheme(ThemeProvider, { theme });

class App extends Component {
  render() {
    return (
      <ResponsiveThemeProvider>
        <Global>
          <MainWrap>
            <TitleList>
              {locale.titles.map(title => (
                <TitleListItem key={title}>
                  <TitleButton>
                    <span>{title}</span>
                  </TitleButton>
                </TitleListItem>
              ))}
            </TitleList>
          </MainWrap>
        </Global>
      </ResponsiveThemeProvider>
    );
  }
}

export default App;

