import { Header } from './component/Header';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';

// having problem after merge
function App() {
  return (
    <>
      <Routes>
        {/* will always output header at the top when the page is loaded */}
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route
            path="productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="about" element={<About />} />
          {/* if we type anything after / it will go to NotFound component */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
