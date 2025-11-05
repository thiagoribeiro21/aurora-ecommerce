import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/FooterComponent';
import { AuthPage } from './pages/AuthPage';
import { Page404 } from './pages/Page404';
import { CartDrawer } from './components/Cart/CartDrawer';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';

// Componente raiz do app: inclui Header, Footer, rotas principais e componentes globais (Toaster, CartDrawer).

function App() {
  return (
    <>
      <Toaster />
      <CartDrawer />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
