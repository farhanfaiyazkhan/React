import React from 'react';
import ReactDOM from 'react-dom/client';

const img = "https://picsum.photos/200";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className="heading">Hello World!</h1>
    <div>
      <img src={img + "?grayscale"} alt="random-image"/>
    </div>
  </div>
);

