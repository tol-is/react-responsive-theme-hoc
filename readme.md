# react-responsive-theme-hoc
- This is part library part convention.

- The motivation is to implement a responsive theme with styled components, but rather than making our components responsive, we make the theme responsive.

- This allows us to add responsie behavior to our components, by modyfying the theme properties alone. Juts as we would do with CSS variables.

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

## Known issues
- Inject Global doesn't work well with changing theme props, but it will be resolved with v4.


## License

MIT © [Apostolos Christodoulou Fischer](https://github.com/tol-is)
