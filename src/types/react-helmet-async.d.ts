declare module 'react-helmet-async' {
  import * as React from 'react';

  interface HelmetProps {
    children?: React.ReactNode;
    defer?: boolean;
    encodeSpecialCharacters?: boolean;
    prioritizeSeoTags?: boolean;
  }

  interface ProviderProps {
    children?: React.ReactNode;
    context?: any;
  }

  export class Helmet extends React.Component<HelmetProps> {}
  export class HelmetProvider extends React.Component<ProviderProps> {}
  export const HelmetData: any;
}
