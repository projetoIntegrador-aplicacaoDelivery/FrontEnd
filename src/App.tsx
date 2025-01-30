import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Categorias from './pages/categorias/Categorias';
import CadastrarCategoria from './pages/categorias/CadastrarCategoria';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos';
import FormProduto from './components/produtos/formproduto/FormProduto';
import DeletarProduto from './components/produtos/deletarproduto/DeletarProduto';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrarcategoria" element={<CadastrarCategoria />} />
        <Route path="/categoria" element={<Categorias />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/cadastrarproduto" element={<FormProduto />} />
        <Route path="/editarproduto/:id" element={<FormProduto />} />
        <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
