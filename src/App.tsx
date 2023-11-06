import React from 'react';
import './App.css';
import Diagram from './components/Diagram';
import FlavorSelect from './components/FlavorSelect';
import NavBar from './components/NavBar';
import NutritionInfo from './components/NutritionInfo';
import { useAppContext } from './context/appContext';

function App() {

  const {state} = useAppContext();
  
  return (
    <div>
      <NavBar />
      <Diagram />
      {state.showNutritionInfo ? <NutritionInfo /> : <FlavorSelect />}
    </div>
  );
}

export default App;
