import React from 'react';
import './style.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

export default function App() {
  return (
    <div>
      <h1>Higher Order Component</h1>
      <p> Similar Functional Component should be reused </p>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}
