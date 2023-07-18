import logo from './logo.svg';
import './App.css';
import AddCostmer from './Website/AdditionCostmer';
import { Route, Routes } from 'react-router-dom';
import MainDashbord from './Website/MainDashbord';
import TabsPage from './Website/Tabs';
import TabsFemal from './Website/TabsFemal';

function App() {
  return (
    <div dir='rtl' className="App">
      <Routes>
      <Route>
      <Route path='/' element={<MainDashbord/>}>
      <Route path='1' element={<AddCostmer/>}/>
      <Route path='2' element={<TabsPage/>}/>
      <Route path='3' element={<TabsFemal/>}/>
      </Route>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
