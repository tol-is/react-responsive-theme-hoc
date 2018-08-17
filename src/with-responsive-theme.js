import React, { Component } from 'react';
import debounce from 'debounce';

import getViewport from './utils/get-viewport';

const withResponsiveTheme = (ThemeProvider, { theme }) => {
  class ResponsiveTheme extends Component {

    constructor() {
      super();

      // bind & debounce window resize callback
      this.onWindowResize = debounce(this.onWindowResize.bind(this), 100);

      // reduce breakpoints to MediaQueryList objects
      this.mqls = Object.entries(theme.breakpoints).reduce((res, [key, bp]) => {
        const mqlValue  = `(${bp.type}: ${bp.value}${bp.unit})`;
        return [
          ...res,
          {
            key : key,
            mql  : window.matchMedia(mqlValue),
          }
        ];
      }, []);

      this.state
    }

    componentDidMount() {
      this.addResizeListener();
    }

    componentWillUnmount() {
      this.removeResizeListener();
    }

    onWindowResize() {
      const viewport = getViewport();
      this.setState({...viewport});
    }

    addResizeListener() {
      window.addEventListener('resize', this.onWindowResize, false);
      this.onWindowResize(null);
    }

    removeResizeListener() {
      window.removeEventListener('resize', this.onWindowResize, false);
    }

    render() {
      // reduce media queries to props
      // start with base theme props and current viewport state
      const responsiveTheme = this.mqls.reduce((res, { key, mql }) => {
        var breakpointProps = theme[key];
        return (mql.matches) ? {...res, ...breakpointProps} : res;
      }, { ...theme.base, ...this.state });

      // return theme provider
      return <ThemeProvider theme={responsiveTheme} {...this.props} />
    }
  }

  return ResponsiveTheme;
};

export default withResponsiveTheme;

