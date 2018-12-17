# react-responsive-theme-hoc
- This is part library part convention and work in progress.

- Its been designed with styled-components in mind, but should work with other css-in-js theme-providers.

- It hasn't been used in production, so only use it at your own risk.

- The motivation is to implement a responsive theme with styled components, but rather than making our components responsive, we make the theme properties responsive.

- This allows us to add responsive css to our components, by modifying the theme properties alone. Just as we would do with CSS variables.

## Install

```
// with npm
npm install react-responsive-theme-hoc --save

// or if you prefer yarn
yarn add react-responsive-theme-hoc
```

## Usage

```
  // import dependencies
  import { ThemeProvider } from 'styled-components';
  import withResponsiveTheme from 'react-responsive-theme-hoc';

  // define theme
  const theme = {
    breakpoints: {
      md  : {
        type: 'min-width',
        unit : 'px',
        value: 768,
      },
      lg  : {
        type: 'min-width',
        unit : 'px',
        value: 1280,
      },
    },
    base: {
      componentFontSize : '18px'
    },
    md : {
      componentFontSize : '22px'
    },
    lg : {
      componentFontSize : '24px'
    }
  }

  // compose ThemeProvider with HOC
  const ResponsiveThemeProvider = withResponsiveTheme(ThemeProvider, { theme });

  // render ResponsiveThemeProvider in your application hierarchy
  const App = () => (
    <ResponsiveThemeProvider>
        {/* ... }
    </ResponsiveThemeProvider>
  );
```

And then anywhere in your application
```
import styled from "styled-components";

const StyledComp = styled.span`
  font-size: ${({ theme }) => theme.componentFontSize};
`;
```

## Todos
- Even with the recommended convention, the theme variables, is just a list of arbitrary named properties. We should have a list of predefined constants, identifying allowed variable names.

## Known issues

#### injectGlobal
injectGlobal doesn't work well with changing theme props, but it will be resolved with v4.
https://github.com/styled-components/styled-components/issues/1333


## License
MIT © [Apostolos Christodoulou](https://github.com/tol-is)
