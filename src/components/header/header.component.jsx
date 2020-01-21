import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

export function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">ProResource</Link>
      </h1>
      <div className="menu-bar">
        <Link to="/about" className="menu-items">
          About
        </Link>
        <a
          href="https://github.com/nickapic/ProgrammingResources"
          className="menu-items"
        >
          Github
        </a>
      </div>
    </div>
  );
}
