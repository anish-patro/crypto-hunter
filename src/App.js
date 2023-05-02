import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' component={HomePage} exact/> 
        <Route path='/Coins/:id' component={CoinPage}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
