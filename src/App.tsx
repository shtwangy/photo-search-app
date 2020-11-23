import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('louvre');

  useEffect(() => {
    console.log('useEffect');
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
  });
  return (
    <div className="App">
    </div>
  );
}

export default App;
