declare module 'react-helmet-async' {
  import * as React from 'react';

  interface HelmetProps {
    children?: React.ReactNode;
    title?: string;
    defaultTitle?: string;
    titleTemplate?: string;
  }

  interface ProviderProps {
    context?: object;
    children?: React.ReactNode;
  }

  export class Helmet extends React.Component<HelmetProps> {}
  export class HelmetProvider extends React.Component<ProviderProps> {}
}
