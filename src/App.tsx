import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-">Página de Teste</h1>
        <p className="text-">Este é um exemplo básico usando Tailwind CSS.</p>
      </header>

      {/* Botão de contagem */}
      <div className="bg-grayish p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-(--color-grayish) mb-4">Contador</h2>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600"
        >
          Contagem: {count}
        </button>
      </div>

      {/* Links de navegação */}
      <div className="mt-8 space-x-4">
        <a
          href="https://vite.dev"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Aprenda sobre Vite
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Aprenda sobre React
        </a>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;