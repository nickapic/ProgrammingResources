import React from 'react';

export default function Button({ content, }) {
  return (
    <div className="button-box">
      <button className="button-box-btn" >{content}</button>
    </div>
  );
}
