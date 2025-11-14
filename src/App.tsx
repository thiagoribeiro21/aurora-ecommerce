import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/FooterComponent';
import { CartDrawer } from './components/Cart/CartDrawer';

const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const AuthPage = lazy(() =>
  import('./pages/AuthPage').then((module) => ({ default: module.AuthPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage }))
);
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((module) => ({
    default: module.ProductsPage,
  }))
);
const Page404 = lazy(() =>
  import('./pages/Page404').then((module) => ({ default: module.Page404 }))
);

// Componente raiz do app: inclui Header, Footer, rotas principais e componentes globais (Toaster, CartDrawer).

function App() {
  return (
    <>
      <Toaster />
      <CartDrawer />
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
