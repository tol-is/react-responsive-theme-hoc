/**
 * Get Viewport dimensions utility
 */

export default () => {
  const w = window;
  const d = document;

  return {
    clientWidth  : d.documentElement.clientWidth || w.innerWidth,
    clientHeight : d.documentElement.clientHeight || w.innerHeight,
    availWidth  : w.screen.availWidth,
    availHeight : w.screen.availHeight,
  };
};
