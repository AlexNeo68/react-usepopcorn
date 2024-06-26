import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
// import './index.css';
// import App from './App';

function Test(){
  const [mRating, setMRating] = useState(0)
  return (
    <div>
      <StarRating maxRating={10} color='blue' defaultRating={mRating} onSetRating={rating=>setMRating(rating)} />
      <p>This movie is rating {mRating}</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating defaultRating={3} maxRating={3} messages={['bad', 'good', 'excelent']} />
    <StarRating defaultRating={4} size={24} />
    <Test />
  </React.StrictMode>
);

