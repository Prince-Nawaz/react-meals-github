import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Cart />
        <Header />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
