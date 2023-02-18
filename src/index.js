import React from 'react';
import ReactDOM from 'react-dom/client';

const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
}

customStyle.color = "blue";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
  </div>
);

