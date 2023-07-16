import logo from './logo.svg';
import './App.css';
import AddCostmer from './Website/AdditionCostmer';
import { Route, Routes } from 'react-router-dom';
import ShowCostmer from './Website/ShowCustomers';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route>
      <Route path='/' element={<AddCostmer/>}/>
      <Route path='/1' element={<ShowCostmer/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
