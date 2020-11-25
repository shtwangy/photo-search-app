import React, {useState} from 'react';
import './App.css';
import {usePhotoData} from "./uses/usePhotoData";
import {PhotoList} from "./components";

function App() {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('louvre');
  
  const photos = usePhotoData(query);

  return (
    <div className="App">
        <PhotoList photos={photos} />
    </div>
  );
}

export default App;
