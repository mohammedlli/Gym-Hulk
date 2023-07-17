import logo from './logo.svg';
import './App.css';
import AddCostmer from './Website/AdditionCostmer';
import { Route, Routes } from 'react-router-dom';
import ShowCostmer from './Website/ShowCustomers';
import MainDashbord from './Website/MainDashbord';

function App() {
  return (
    <div dir='rtl' className="App">
      <Routes>
      <Route>
      <Route path='/' element={<MainDashbord/>}>
      <Route path='1' element={<AddCostmer/>}/>
      <Route path='2' element={<ShowCostmer/>}/>
      </Route>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
