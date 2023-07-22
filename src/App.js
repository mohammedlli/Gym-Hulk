import logo from './logo.svg';
import './App.css';
import AddCostmer from './Website/Addition/AdditionCostmer';
import { Route, Routes } from 'react-router-dom';
import MainDashbord from './Website/pages/MainDashbord';
import TabsFemal from './Website/TableCustomer/CustomizeGender/Female/TabsFemal';
import Login from './Auth/Authusers/Login';
import AuthProvider from './Auth/context/AuthContext';
import RequireAuth from './Auth/context/RequireAuth';
import Home from './Website/pages/Home';
import Update from './Auth/Authusers/Update';
import Sinup from './Auth/Authusers/Sinup';
import TabsMale from './Website/TableCustomer/CustomizeGender/Male/Tabsmale';
function App() {
  return (
    <div dir='rtl' className="App">
      <AuthProvider>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route element={<RequireAuth><MainDashbord/></RequireAuth>}>
      <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
      <Route path='addcuostmer' element={<RequireAuth><AddCostmer/></RequireAuth>}/>
      <Route path='male' element={<RequireAuth><TabsMale/></RequireAuth>}/>
      <Route path='femal' element={<RequireAuth><TabsFemal/></RequireAuth>}/>
      <Route path='register' element={<RequireAuth><Sinup/></RequireAuth>}/>
      <Route path='update' element={<RequireAuth><Update/></RequireAuth>}/>
      </Route>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
