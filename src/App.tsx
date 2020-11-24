import React, {useState, useEffect} from 'react';
import './App.css';
import Image from "./types/image";
import {getPhotos} from "./api/PhotoAPI";

function App() {
  const [photos, setPhotos] = useState([] as Image[]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('louvre');

  useEffect(() => {
    getPhotos(query).then(res => {
      setPhotos(res);
    });
  }, [query]);
  return (
    <div className="App">
    </div>
  );
}

export default App;
