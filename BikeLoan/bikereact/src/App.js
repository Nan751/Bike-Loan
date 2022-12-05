import './App.css';
import LoanAction from './Components/LoanAction';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
// import Register from './Components/Register';
// import RegActions from './Components/RegActions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
       {/* <LoanAction/> */}
       <Route path='/Login' element={<LoanAction className='App-header'/>} />
      <Route path='/' element={<Login/>} />
      {/* <Route path='/Register' element={<RegActions className='App-header'/>} />
      <Route path='/' element={<Register/>} /> */}
       </Routes>
  
      </header>
    </div>
  );
}

export default App;
