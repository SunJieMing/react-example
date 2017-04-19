import React from 'react';
import NavButtons from './NavButtons';
import Logo from './Logo';
import CommandCenter from './CommandCenter';

export default () => {
  return (
    <div className="navbar">
      <NavButtons />
      <Logo />
      <CommandCenter />
    </div>
  );
};
