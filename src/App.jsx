import React from 'react';
import Hello from './Hello';
import Message from './Message';

function App() {
  return (
    <div>
      {/* Pregunta 1: Sí, estamos usando el componente Hello dos veces en App.jsx y se puede sin problemas. En la página vemos dos Hello y después de cada Hello un Message porque Message está importado en Hello. El último Message es el Message de App.jsx*/}
      <Hello />
      <Hello />
      {/* Pregunta 2: Sí, podemos renderizar Message directamente en App.jsx, pero para ello también hay que importarlo en App.jsx. */}
      <Message />
    </div>
  );
}

export default App;
