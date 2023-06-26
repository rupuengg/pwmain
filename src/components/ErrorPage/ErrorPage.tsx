import React from 'react';

export interface IErrorPage {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export const ErrorPage: React.FC<IErrorPage> = ({ children }: IErrorPage) => {
  return <div className="error-page">
    <h1>Error</h1>
    <p>{children}</p>
  </div>;
}

export default ErrorPage;