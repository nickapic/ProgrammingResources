import React from 'react';
import { Link } from 'react-router-dom';
import './main-container.styles.scss';

export default function MainContainer() {
  return (
    <div className="main-container">
      <p className="main-container_text-box">
        Learn any Programming Language for Free with all these amazing free
        resources
      </p>
      <Link className="main-container_button" to="/categories">
        See all Categories
      </Link>
    </div>
  );
}
