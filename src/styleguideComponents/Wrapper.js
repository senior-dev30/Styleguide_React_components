import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import ThemeProvider from '../ThemeProvider';
import 'react-toastify/dist/ReactToastify.css';

export default class Wrapper extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <MemoryRouter>
          <Route
            component={({ location }) => (
              <div className='text-center py-1 bg-white sticky-top shadow-sm'>
                you're at <code>{location.pathname}</code>
                <div>
                  <small>
                    Note: This is just mock up to verify front-end
                    <code> Link </code>
                    are working within components.
                  </small>
                </div>
              </div>
            )}
            path='/docz-mock-url/'
          />
          {this.props.children}
        </MemoryRouter>
      </ThemeProvider>
    );
  }
}
