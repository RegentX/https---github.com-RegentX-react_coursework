import React, { useState } from 'react';
import './App.css';
import Header from './header/header';
import Note from './body/notes/note';
import NoteForm from './body/note_form/note_form';

function App() {

  const [articles, setArticles] = useState([]);

  const [archives, setArchive] = useState([]);

  const addArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  const addArchive = (newArchive) => {
    setArchive([...archives, newArchive]);
  }

  console.log(articles);
  console.log('in main');
  return (
    <div className="App">
      
        {
      <div>
      <Header />
      <div className="main-wrap">
        <div className="left-panel">
          <Note articles={articles} setArticles={setArticles} addArchive={addArchive} archives={archives}/>
        </div>
        <div className="right-panel">
          <NoteForm addArticle={addArticle} archives={archives}/>
        </div>
      </div>
      </div>
      }

      
      

    </div>
  );
}

export default App;
