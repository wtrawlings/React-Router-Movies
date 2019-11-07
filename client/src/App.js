import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} name="prop test" />
      <Route exact path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList}/>} />
      <Route exact path="/" component={MovieList} />
    </div>
  );
};
// gotta make a change
export default App;
