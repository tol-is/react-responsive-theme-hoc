import { Children } from "react";
import { withTheme, injectGlobal } from "styled-components";

const Global = ({ theme, children }) => {
  injectGlobal`
    html {
      background-color: ${theme.htmlBgColor};
      color: ${theme.htmlColor};
      font-family: ${theme.htmlFontFamily};
      font-size: ${theme.htmlFontSize};

      box-sizing: border-box;
      *, *:before, *:after {
        box-sizing: inherit;
      }
    }

    body {
      padding: ${theme.bodyPadding};
    }
  `;
  return Children.only(children);
};

export default withTheme(Global);
