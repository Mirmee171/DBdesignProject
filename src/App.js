import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SearchScreen from "./view/screen/searchScreen/SearchScreen";
import InputScreen from "./view/screen/inputScreen/InputScreen";

const App = () => {
  return (
      <>
        <SearchScreen/>
        <InputScreen/>
      </>
  )
}

export default App;
