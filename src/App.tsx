// NPM Modules
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Custom Modules
import { AccountPage, PortalPage } from 'pages/portal';
import { LoginPage, PasswordForgotPage, PasswordResetPage, RegisterPage } from 'pages/public';

export default class App extends React.Component {
  public router = createBrowserRouter([
    {
      path: '/',
      element: <PortalPage />
    },
    {
      path: '/account',
      element: <AccountPage />
    },
    {
      path: '/account/settings',
      element: <PortalPage />
    },
    {
      path: '/password-forgot',
      element: <PasswordForgotPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/password-reset',
      element: <PasswordResetPage />
    }
  ]);
  render() {
    return (
      <div className='App'>
        <RouterProvider router={this.router} />
      </div>
    );
  }
}
