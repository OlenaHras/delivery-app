import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage/HomePage';

import Spinner from './components/Spinner/Spinner';
import './App.css';

const Page404 = lazy(() => import('./pages/404'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
