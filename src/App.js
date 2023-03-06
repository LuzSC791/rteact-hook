import React from 'react';
// Importar componente (Contador) // import Contador from './components/Contador.js';
import Contador from './components/Contador';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/FormHooks';
import ExampleOne from './components/ExampleOne';
// Mostramos el contenido de nuestra App
function App() {
  return (
    <div className="container mt-2">
      <ExampleOne/>
      <FormHook/>
    </div>
  );
}

export default App;
