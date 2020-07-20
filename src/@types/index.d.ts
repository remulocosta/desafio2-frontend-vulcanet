declare module '*.png';

declare module '*.JPG';

declare module '*.gif';

declare module '\*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
