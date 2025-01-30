import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Categorias from './pages/categorias/Categorias';
import CadastrarCategoria from './pages/categorias/CadastrarCategoria';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos';
import FormProduto from './components/produtos/formproduto/FormProduto';
import DeletarProduto from './components/produtos/deletarproduto/DeletarProduto';
import RecomendaProduto from './components/produtos/recomendaproduto/RecomendaProduto';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletarCategoria from './pages/categorias/DeletarCategoria';

function App() {
  return (<>
    <ToastContainer />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrarcategoria" element={<CadastrarCategoria />} />
        <Route path="/categoria" element={<Categorias />} />
        <Route path="/editarcategoria/:id" element={<Categorias />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/cadastrarproduto" element={<FormProduto />} />
        <Route path="/editarproduto/:id" element={<FormProduto />} />
        <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
        <Route path="/recomenda" element={<RecomendaProduto />} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}

export default App;
