import React, { useState } from 'react';
import { Route } from "react-router-dom";
//for some reason removing Router from the import messes up the mapping of the data
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    //what is that thing before savedList? DEstructuring?
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
