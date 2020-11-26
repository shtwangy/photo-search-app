import React, {useState} from 'react';
import {usePhotoData} from "./uses/usePhotoData";
import {PhotoList} from "./components";

function App() {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('louvre');
  
  const photos = usePhotoData(query);

  return (
    <main>
        <PhotoList photos={photos} />
    </main>
  );
}

export default App;
