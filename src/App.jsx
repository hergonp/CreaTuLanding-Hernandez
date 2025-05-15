import { Routes, Route } from 'react-router';
import NavBar from './components/Header/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/category/:category' element={<ItemListContainer />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
