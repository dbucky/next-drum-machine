import React from 'react';

import SoundEnabledProvider from '../components/SoundEnabledProvider';
import Header from '../components/Header';

import './styles.css';

function RootLayout({ children }) {
  return (
    <SoundEnabledProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </body>
      </html>
    </SoundEnabledProvider>
  );
}

export default RootLayout;
